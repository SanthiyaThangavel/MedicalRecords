import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from 'axios';

const Ehr = () => {
  const [ehrData, setEhrData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      console.log(token); 
      try {
        const response = await axios.get('http://localhost:8181/api/v1/auth/tests'
        ,{
          headers:{
            "cache-control":"no-cache",
            "Authorization":`Bearer ${token}`
          }
        }); 
        setEhrData(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
    return (
    <div className="card">
      <div className="card-content">
        <h2>Health Records</h2>
        <ul>
          {ehrData.map((ehr) => (
            <li key={ehr.hist}>
              <p>History: {ehr.hist}</p>
              <p>Treatment Plans: {ehr.treatplans}</p>
              <p>Report: {ehr.report}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ehr;
