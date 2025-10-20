🔐 MERN Stack User Authentication Project

A full-stack MERN (MongoDB, Express, React, Node.js) application for secure user authentication.
This project demonstrates a production-ready implementation of Signup, Login, Profile, and Logout using JWT authentication with cookies.

🚀 Live Demo


visit here:- https://mern-stack-project-user-authentication-rc71.onrender.com


🧰 Tech Stack

***Frontend

React.js (with React Router)

Axios for API calls

Custom CSS for UI styling


***Backend

Node.js & Express.js

MongoDB Atlas for database

JWT for authentication

Bcrypt for password hashing

Cookie-parser for HTTP-only cookies

CORS for frontend-backend communication

⚙️ Features

✅ User Registration (Signup)
✅ User Login with JWT Authentication
✅ Protected Profile Page (requires valid token)
✅ Persistent Authentication using HTTP-only Cookies
✅ Logout Functionality (clears cookies)
✅ Fully Deployed on Render (Frontend + Backend)

📁 Folder Structure
MERN-Stack-Project-User-Authentication/
│
├── Backend/
│   ├── Models-DB/
│   │   └── UserModel.js
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── _redirects
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Profile.jsx
│   │   ├── stylesheets/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md

🛠️ Environment Variables (Backend)

Create a .env file inside the Backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=production

▶️ Run Locally

Clone the repository

git clone https://github.com/Nikhil-chary381/MERN-Stack-Project-User-Authentication.git


Install dependencies

cd Backend
npm install
cd ../frontend
npm install


Run the backend

cd Backend
npm start


Run the frontend

cd frontend
npm start


Open in browser

Frontend: http://localhost:3000
Backend: http://localhost:4000

✨ Author

👨‍💻 Nikhil Chary
B.Tech CSE | MERN Stack Developer
📍 Hyderabad, India
🔗 GitHub Profile:- https://github.com/Nikhil-chary381
