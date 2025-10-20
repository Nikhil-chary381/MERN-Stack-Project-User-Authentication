import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await axios.get('https://mern-stack-project-user-authentication.onrender.com/profile', { withCredentials: true });
        navigate('/profile');
      } catch (err) {
        // Not logged in → stay on home
      }
    };

    checkLogin();
  }, [navigate]);

  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Welcome to Our App</h1>
        <p>Login or Sign Up to continue</p>
        <div className="home-buttons">
          <a href="/login" className="btn">Login</a>
          <a href="/signup" className="btn signup-btn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
