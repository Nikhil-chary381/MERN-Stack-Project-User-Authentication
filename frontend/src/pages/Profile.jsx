import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('https://mern-stack-project-user-authentication.onrender.com/profile', {
          withCredentials: true, // send cookies
        });
        setUser(data.user);
      } catch (err) {
        console.error(err);
        setMessage(err.response?.data?.message || 'Failed to fetch profile.');
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('https://mern-stack-project-user-authentication.onrender.com/logout', {}, { withCredentials: true });
      navigate('/login'); // redirect to login
    } catch (err) {
      console.error(err);
      setMessage('Logout failed. Try again.');
    }
  };

  if (message) return <p style={{ color: 'red' }}>{message}</p>;
  if (!user) return <p>Loading profile...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {user.fullname}!</h1>
      <p>Email: {user.email}</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: '#ff4d4d',
          color: 'white',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
