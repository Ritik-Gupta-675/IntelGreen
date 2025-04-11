from ultralytics import YOLO
import cv2
import base64
import json
import time

class Model2:
    def __init__(self):
        self.model = None

    def load_model(self):
        try:
            self.model = YOLO('yolov8n.pt')  # Using YOLOv8 nano for faster inference
            return True
        except Exception as e:
            print(f"Error loading YOLO model: {str(e)}")
            return False

    def generate_response(self, image_path, save_output=False):
        try:
            # Load and process image
            image = cv2.imread(image_path)
            if image is None:
                return None

            # Run inference
            results = self.model(image)
            
            # Get detections
            detections = results[0].boxes
            
            # Check if any detections were found
            if len(detections) > 0:
                # Get the first detection (most confident)
                box = detections[0].xyxy[0].cpu().numpy()
                confidence = detections[0].conf[0].cpu().numpy()
                
                # Calculate center coordinates
                x_center = (box[0] + box[2]) / 2
                y_center = (box[1] + box[3]) / 2
                
                # Convert image to base64 for storage
                _, buffer = cv2.imencode('.jpg', image)
                image_base64 = base64.b64encode(buffer).decode('utf-8')
                
                # Prepare response
                return {
                    'found': True,
                    'coordinates': {
                        'x': float(x_center),
                        'y': float(y_center)
                    },
                    'confidence': float(confidence),
                    'image': image_base64,
                    'timestamp': int(time.time())
                }
            else:
                return {
                    'found': False,
                    'timestamp': int(time.time())
                }
                
        except Exception as e:
            print(f"Error in YOLO prediction: {str(e)}")
            return None
