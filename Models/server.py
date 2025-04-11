from flask import Flask, request, jsonify
import os
from call1 import Model1
from call2 import Model2
import requests
import json
import firebase_admin
from firebase_admin import credentials, db
import requests
requests.packages.urllib3.disable_warnings()
# response = requests.get('https://oauth2.googleapis.com/token', verify=False)
print("Starting server initialization...")

# Initialize Firebase Admin SDK
# try:
#     cred = credentials.Certificate('serviceAccountKey.json')
#     firebase_admin.initialize_app(cred, {
#         'databaseURL': 'https://inteligreen-default-rtdb.firebaseio.com/'
#     })
#     print("Firebase initialized successfully")
# except Exception as e:
#     print(f"Firebase initialization error: {str(e)}")
    

app = Flask(__name__)

# Initialize Classes
tf_model = Model1('model.keras')
yolo_model = Model2()

# Load Models at Startup
tf_model.load_model()
yolo_model.load_model()

print("Models loaded successfully")


@app.route('/')
def home():
    return "Server Running with TensorFlow & YOLO!"

@app.route('/predict/')
def predict_tf():
    try:

        image_path = 'canopy_img.png'
        
        if not os.path.exists(image_path):
            return jsonify({'error': 'Local image not found!'}), 404
        
        # if not os.path.exists(image_path):
        #     return jsonify({'error': 'Local image not found!'}), 404

        # Get prediction from model
        result = yolo_model.generate_response(image_path, save_output=False)

        return jsonify({'result': result})
        print("\nStarting prediction...")  # Debug log
        
        # Use a local image
        # image_path = 'download (1).jpeg'
        # print(f"Looking for image at: {image_path}")  # Debug log
        
        # Check if image exists and get its absolute path
        # if not os.path.exists(image_path):
        #     print(f"Image not found at {os.path.abspath(image_path)}")  # Debug log
        #     return jsonify({'error': 'Local image not found!', 'path_checked': os.path.abspath(image_path)}), 404

        print("Image found, generating prediction...")  # Debug log
        # print(f"Image path: {os.path.abspath(image_path)}")  # Debug log
        
        # Get prediction from model
        result = tf_model.generate_response(image_path)
        print(f"Raw result: {result}")  # Debug log
        
        
        result_dict = json.loads(result)
        print(f"Parsed result: {result_dict}")  # Debug log

        # Save to Firebase
        # try:
        #     ref = db.reference('predictions')
        #     push_result = ref.push(result_dict)
        #     print(f"Saved to Firebase with key: {push_result.key}")  # Debug log
        #     firebase_status = 'success'
        # except Exception as firebase_error:
        #     print(f"Firebase error: {str(firebase_error)}")  # Debug log
        #     firebase_status = f'error: {str(firebase_error)}'

        # Prepare response
        response = {
            'prediction': result_dict.get('prediction'),
            'coordinates': result_dict.get('coordinates'),
            # 'firebase_status': firebase_status,
            'timestamp': result_dict.get('timestamp')
        }

        print(f"Sending response: {response}")  # Debug log
        print(f"Sending response: {response}")  # Debug log
        return jsonify(response)
        
        
    except Exception as e:
        print(f"Error: {str(e)}")  # Debug log
        return jsonify({
            'error': str(e),
            'debug': {
                'image_path': os.path.abspath(image_path) if os.path.exists(image_path) else None,
                'firebase_url': 'https://inteligreen.firebaseio.com'
            }
        }), 500
        

# @app.route('/predict/yolo')

# def predict_yolo():
#     try:
#         # Use a local image
#         # Use a local image
#         image_path = 'canopy_img.png'
        
#         if not os.path.exists(image_path):
#             return jsonify({'error': 'Local image not found!'}), 404
        
#         if not os.path.exists(image_path):
#             return jsonify({'error': 'Local image not found!'}), 404

#         # Get prediction from model
#         result = yolo_model.generate_response(image_path, save_output=False)

#         return jsonify({'result': result})

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    print("\nStarting Flask server...")
    app.run(debug=True, host='0.0.0.0', port=5000, use_reloader=False)
    # print("\nStarting Flask server...")
    # app.run(debug=True, host='0.0.0.0', port=5000, use_reloader=False)
