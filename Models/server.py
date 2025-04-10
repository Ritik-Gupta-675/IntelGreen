from flask import Flask, request, jsonify
import os
from call1 import Model1
from call2 import Model2
import requests
import json

app = Flask(__name__)

# Initialize Classes
tf_model = Model1('model.keras')
yolo_model = Model2()  # Provide model path here

# Load Models at Startup
tf_model.load_model()
yolo_model.load_model()

@app.route('/')
def home():
    return "Server Running with TensorFlow & YOLO!"

@app.route('/tfpredict/', methods=['POST'])
def predict_tf():
    try:
        # Get image file from request
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400
            
        image = request.files['image']
        image_path = 'canopy_img.png'
        image.save(image_path)

        # Get prediction from model
        result = tf_model.generate_response(image_path)
        result_dict = json.loads(result)

        # Send to Firebase
        firebase_url = "https://your-firebase-app.firebaseio.com/p1_results.json"
        firebase_response = requests.put(firebase_url, json=result_dict)

        # Prepare response
        response = {
            'prediction': result_dict.get('prediction'),
            'coordinates': result_dict.get('coordinates'),
            'firebase_status': 'success' if firebase_response.status_code == 200 else 'failed',
            'timestamp': result_dict.get('timestamp')
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/predict/yolo', methods=['POST'])
def predict_yolo():
    try:
        # Get image file from request
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400
            
        image = request.files['image']
        image_path = 'canopy_img.png'
        image.save(image_path)

        # Get prediction from model
        result = yolo_model.generate_response(image_path, save_output=False)

        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
