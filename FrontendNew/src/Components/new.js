import React, { useEffect, useState } from 'react';
import './ehr.css';
import axios from 'axios';

function Ehr() {
  const [ehrData, setEhrData] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token); 
        try {
          const response = await axios.get('http://localhost:8181/api/v1/demo/ehr/getehr'
          ,{
            headers: {
              "cache-control": 'no-cache',
              "Authorization": `Bearer ${token}`
            },
          }); 

          // console.log(response.data);
          setEhrData(response.data);
          console.log("response.data",response)
        } catch (error) {
          console.log(error);
    }
  };
  fetchTaskData();
}, []);
  return (
    <div>
     
      <div>
        <h2 className="ehrh">Electronic Health Records (EHR)</h2>
        <div>
          <div className="ehrhistory">
            <h2 className="ehrname">HISTORY</h2>
            <ul>
              {ehrData.map((ehrItem) => (
                <li key={ehrItem.history}>{ehrItem.history}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="ehrplans">
            <h2 className="ehrname">PLANS</h2>
            <ul>
              {ehrData.map((ehrItem) => (
                <li key={ehrItem.history}>{ehrItem.plans}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="ehrresults">
            <h2 className="ehrname">RESULTS</h2>
            <ul>
              {ehrData.map((ehrItem) => (
                <li key={ehrItem.history}>{ehrItem.results}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ehr;