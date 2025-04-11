import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { rtdb } from '../../config/firebase';
import { ref, get, set, onValue, push } from 'firebase/database';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const blogRef = ref(rtdb, 'blogs');
    
    // Real-time listener for blog posts
    const unsubscribe = onValue(blogRef, (snapshot) => {
      const posts = [];
      snapshot.forEach((childSnapshot) => {
        posts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      setBlogPosts(posts);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleAddBlog = () => {
    navigate('/blog/new');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IntelGreen Journal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Latest updates, discoveries, and environmental insights from the field
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Add Blog Button */}
        <div className="mb-10">
          <button
            onClick={handleAddBlog}
            className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            Add New Blog
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.content}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;