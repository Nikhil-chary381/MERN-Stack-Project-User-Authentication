import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
        console.log("User not logged in");
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
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn signup-btn">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
