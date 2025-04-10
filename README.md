# InteliGreen - Intelligent Forest Monitoring System
# Hackmol 6.0 Project under Team Name : "The Showing Gamers"
## Vision
InteliGreen is an innovative solution designed to combat illegal deforestation using cutting-edge technologies. Our mission is to provide real-time monitoring and early detection of deforestation activities, enabling timely intervention and conservation efforts.

## Project Overview
InteliGreen combines satellite imagery analysis with machine learning to identify and track deforestation patterns. The system consists of three main components:

1. **Backend**: Firebase-based serverless architecture for data storage and processing
2. **Frontend**: React-based web interface for user interaction and visualization
3. **Models**: TensorFlow-powered machine learning models for satellite image analysis

## Workflow

1. **Data Collection**
   - Satellite imagery is periodically collected
   - Images are stored in Firebase Cloud Storage

2. **Image Processing**
   - TensorFlow models analyze new satellite images
   - Changes in forest cover are detected
   - Potential deforestation areas are flagged

3. **Data Storage**
   - Processed data and analysis results are stored in Firebase
   - Historical data is maintained for trend analysis

4. **User Interface**
   - React frontend displays real-time deforestation alerts
   - Interactive maps show affected areas
   - Historical data visualization for trend analysis

5. **Alert System**
   - Real-time alerts for potential deforestation
   - Automated notifications to relevant authorities
   - Historical data reports generation

## Technical Stack

- **Backend**: Firebase (Cloud Functions, Firestore, Cloud Storage)
- **Frontend**: React, React Hook Form, Zod
- **Machine Learning**: TensorFlow, Python
- **Data Processing**: Node.js, Python

## Getting Started

Please refer to the individual component READMEs for setup instructions:

- [Backend Setup](backend/README.md)
- [Frontend Setup](frontend/README.md)
- [Model Training](Models/README.md)

## Contributing

We welcome contributions to improve our deforestation detection capabilities. Please follow our contribution guidelines before submitting pull requests.
