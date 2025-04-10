from ultralytics import YOLO

class Model2:
    def __init__(self):
        self.model_path = 'yolov8n.pt'# Placeholder for YOLO model

    def load_model(self):
        # Load Pretrained YOLOv8 Model
        self.model = YOLO(self.model_path)

    def generate_response(self, image_path, save_output=False):
        # Perform Object Detection
        results = self.model(image_path)

        # Show the image with detected objects
        results[0].show()

        # Optional: Save output image
        if save_output:
            results[0].save(filename='output.jpg')
            print("Output image saved as output.jpg")

# Usage
# if __name__ == "__main__":
#     model_path = 'yolov8n.pt'  # or yolov8s.pt, yolov8m.pt, etc.

#     obj = YoloModel(model_path)
#     obj.load_model()

#     # Pass any image for detection
#     obj.generate_response('canopy_img.png', save_output=True)

