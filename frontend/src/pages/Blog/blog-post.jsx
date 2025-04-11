import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rtdb } from '../../config/firebase';
import { ref, get, update, push, set } from 'firebase/database';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (id !== 'new') {
          const postRef = ref(rtdb, `blogs/${id}`);
          const snapshot = await get(postRef);
          if (snapshot.exists()) {
            const data = snapshot.val();
            setTitle(data.title);
            setContent(data.content);
            setDate(data.date);
            setIsEditing(true);
          } else {
            navigate('/blog');
          }
        } else {
          setIsEditing(false);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update existing post
        const postRef = ref(rtdb, `blogs/${id}`);
        await update(postRef, {
          title,
          content,
          date,
          updatedAt: new Date().toISOString()
        });
      } else {
        // Create new post
        const blogRef = ref(rtdb, 'blogs');
        const newPostRef = push(blogRef);
        await set(newPostRef, {
          title,
          content,
          date: date || new Date().toISOString(),
          createdAt: new Date().toISOString()
        });
        navigate(`/blog/${newPostRef.key}`);
      }
      navigate('/blog');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleCancel = () => {
    navigate('/blog');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                rows={10}
                required
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                {isEditing ? 'Update Post' : 'Create Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;