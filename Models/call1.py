from tensorflow.keras.utils import load_img, img_to_array
import tensorflow as tf
import json
import time

class Model1:
    def __init__(self, model_path):
        self.model_path = model_path
        self.model = None  # Placeholder for loaded model

    def load_model(self):
        try:
            # Load the trained model
            self.model = tf.keras.models.load_model(self.model_path)
            return True
        except Exception as e:
            print(f"Error loading model: {str(e)}")
            return False

    def generate_response(self, image_path):
        try:
            # Load and preprocess the image
            image = load_img(image_path, target_size=(224, 224))
            image_array = img_to_array(image)
            image_batch = tf.expand_dims(image_array, axis=0)
            image_normalized = image_batch / 255.0  # Normalization

            # Generate prediction
            prediction = self.model.predict(image_normalized)
            prediction_value = float(1 - prediction[0][0])

            # Generate random coordinates (to be replaced with actual coordinates)
            x = round(prediction_value * 100)  # Example: scale prediction to coordinate
            y = round((1 - prediction_value) * 100)  # Example: inverse scale

            # Prepare response
            result = {
                'prediction': prediction_value,
                'coordinates': {
                    'x': x,
                    'y': y
                },
                'timestamp': int(time.time())
            }

            return json.dumps(result)

        except Exception as e:
            print(f"Error in prediction: {str(e)}")
            return json.dumps({
                'error': str(e),
                'timestamp': int(time.time())
            })

# # Usage
# if __name__ == "__main__":
#     model_path = 'model.keras'

#     obj = Model1(model_path)
#     obj.load_model()

#     # Pass any image for prediction
#     obj.generate_response('canopy_img.png')
