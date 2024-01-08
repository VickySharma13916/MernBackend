MERN Stack Backend
Overview
This repository contains the backend code for a MERN (MongoDB, Express, React, Node.js) stack web application that allows users to create, read, update, and delete notes. Users can create an account, log in, and manage their own notes.

Getting Started
Prerequisites
Node.js and npm installed. Download Node.js
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/VickySharma13916/MernBackend.git
Navigate to the project directory:

bash
Copy code
cd MernBackend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

env
Copy code
PORT=5000
MONGODB_URL = mongodb://127.0.0.1:27017/MERN
JWT_SECRET=your-secret-key
Replace your-mongodb-connection-string with your MongoDB connection string and your-secret-key with a secure secret key for JWT.

Start the server:

bash
Copy code
npm run dev
The server will be running on http://localhost:5000.

API Endpoints
Authentication
POST /api/admin/Sign-up: Register a new user.

Request Body: { "email": "user@example.com", "password": "securepassword" }
POST /api/admin/login: Log in an existing user.

Request Body: { "email": "user@example.com", "password": "securepassword" }
Response: { "token": "jwt-token" }
Notes
GET /api/notes: Get all notes for the authenticated user.

POST /api/notes: Create a new note for the authenticated user.

Request Body: { "title": "Note Title", "description": "Note Description" }
GET /api/notes/:id: Get details of a specific note.

PUT /api/notes/:id: Update a specific note.

Request Body: { "title": "Updated Title", "description": "Updated Description" }

DELETE /api/notes/:id: Delete a specific note.

Deployment
The backend is deployed on Render at https://mern-stack-backend-71mo.onrender.com/.

Contributors
VickySharma13916
License
This project is licensed under the MIT License - see the LICENSE file for details.
