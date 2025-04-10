# InteliGreen Backend

## Overview
The backend component of InteliGreen is built on Firebase, providing a serverless architecture for data storage, processing, and real-time updates.

## Architecture

1. **Firebase Services Used**
   - Cloud Functions: For image processing and analysis
   - Firestore: For storing processed data and analysis results
   - Cloud Storage: For storing satellite images
   - Authentication: For user management

2. **Data Flow**
   - Satellite images are uploaded to Cloud Storage
   - Cloud Functions trigger on new uploads
   - Processed data is stored in Firestore
   - Real-time updates are sent to connected clients

## Setup Instructions

1. **Prerequisites**
   - Node.js (v14 or higher)
   - Firebase CLI
   - Google Cloud SDK

2. **Installation**
   ```bash
   # Install dependencies
   npm install

   # Initialize Firebase
   firebase init

   # Select Cloud Functions and Firestore
   ```

3. **Configuration**
   - Create a `config.js` file with your Firebase project credentials
   - Set up environment variables for API keys

## Functions

1. **Image Processing**
   - Triggered on new image uploads
   - Processes images using TensorFlow models
   - Stores results in Firestore

2. **Alert System**
   - Monitors changes in forest cover
   - Sends notifications to users
   - Generates reports

3. **Data Management**
   - Manages historical data
   - Provides API endpoints for frontend
   - Handles user authentication

## Security

- All API endpoints are protected by Firebase Authentication
- Cloud Functions have restricted access
- Data is encrypted at rest
- Rate limiting is implemented for API calls

## Monitoring

- Firebase Cloud Functions logs
- Performance monitoring
- Error tracking
- Usage analytics

## Contributing

Please follow the main project's contribution guidelines when making changes to the backend.