
# CWStats Clone

## Overview
This project is a clone of the CWStats website, which provides analytics, leaderboards, and stats for Clash Royale Clan Wars. The project includes both the frontend and backend components, built with modern web technologies.

## Tech Stack
- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Deployment:** Docker, Docker Compose

## Features
1. **Leaderboard Display:**
   - Shows the top clans based on their scores.
   - Data is fetched from the backend and displayed dynamically on the frontend.

2. **Backend API:**
   - Provides endpoints for fetching clan data.
   - Uses MongoDB for data storage.

3. **Frontend Application:**
   - Built with React to provide a dynamic and responsive user interface.
   - Includes components for displaying leaderboards and clan information.

## Project Structure
```plaintext
cwstats_clone/
├── backend/
│   ├── controllers/
│   │   └── statsController.js
│   ├── models/
│   │   └── clan.js
│   ├── routes/
│   │   └── stats.js
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Leaderboard.js
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
└── docker-compose.yml
```

## Backend (Node.js with Express)
- **app.js:** Initializes the Express app and connects to MongoDB.
- **controllers/statsController.js:** Contains the logic for fetching leaderboard data.
- **models/clan.js:** Defines the schema for clan data in MongoDB.
- **routes/stats.js:** Defines the API endpoint for fetching leaderboard data.

## Frontend (React)
- **public/index.html:** The main HTML file.
- **src/index.js:** Entry point for the React application.
- **src/App.js:** Main application component that fetches data from the backend and displays it.
- **src/components/Leaderboard.js:** Component for displaying the leaderboard.
- **src/index.css:** Basic styling for the application.

## Docker Compose for Deployment
- **docker-compose.yml:** Defines the services for backend, frontend, and MongoDB. Allows for easy setup and deployment using Docker.

## Setup and Usage
1. **Install Tools:**
   - Ensure Docker and Docker Compose are installed on your machine.

2. **Build and Run the Project:**
   ```bash
   docker-compose up --build
   ```

3. **Access the Application:**
   - The frontend application will be available at `http://localhost:3000`.
   - The backend API will be running on `http://localhost:5000`.

4. **Clean Up:**
   ```bash
   docker-compose down
   ```

## Learning Outcomes
- **Full-Stack Development:** Gain experience in building both frontend and backend components of a web application.
- **API Development:** Learn how to create RESTful APIs with Node.js and Express.
- **React Development:** Develop dynamic user interfaces using React.
- **Docker:** Understand how to containerize applications and manage multi-container deployments.
