import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch user profile data from the backend when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/v1/demo');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return <Card userData={userData} />;
};

export default Profile;
