# InteliGreen Frontend

## Overview
The frontend component of InteliGreen is built with React, providing a modern and interactive user interface for monitoring deforestation activities.

## Architecture

1. **Tech Stack**
   - React (v18+)
   - React Hook Form
   - Zod for form validation
   - Leaflet for interactive maps
   - Material-UI for components

2. **Key Features**
   - Real-time deforestation alerts
   - Interactive satellite imagery viewer
   - Historical data visualization
   - User authentication and authorization
   - Report generation

## Setup Instructions

1. **Prerequisites**
   - Node.js (v14 or higher)
   - npm or yarn

2. **Installation**
   ```bash
   # Install dependencies
   npm install

   # Create .env file with Firebase configuration
   cp .env.example .env
   # Edit .env with your Firebase credentials
   ```

3. **Running the Application**
   ```bash
   # Start development server
   npm run dev

   # Build for production
   npm run build
   ```

## Components

1. **Dashboard**
   - Real-time alerts overview
   - Map-based visualization
   - User activity monitoring

2. **Image Analysis**
   - Satellite image viewer
   - Change detection visualization
   - Historical comparison tools

3. **Reports**
   - Deforestation statistics
   - Area analysis
   - Exportable reports

4. **Authentication**
   - User login/register
   - Role-based access control
   - Session management

## State Management

- React Context API for global state
- Local storage for user preferences
- Real-time updates using Firebase

## Performance Optimization

- Code splitting with React.lazy
- Image optimization
- Lazy loading of components
- Caching strategies

## Testing

- Jest for unit tests
- React Testing Library for component tests
- E2E tests with Cypress

## Contributing

Please follow the main project's contribution guidelines when making changes to the frontend.