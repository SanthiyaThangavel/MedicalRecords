import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Report = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch the reports from the backend when the component mounts
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/v1/auth/getrep');
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  const addReport = async () => {
    // Replace 'reportData' with the actual data for the new report you want to add
    const reportData = {
      hist: 'Your Report Data Here',
    };

    try {
      const response = await axios.post('/api/v1/auth/addrep', reportData);
      if (response.data) {
        // If the report is added successfully, refresh the list of reports
        fetchReports();
      } else {
        console.error('Failed to add report.');
      }
    } catch (error) {
      console.error('Error adding report:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2>Your Reports</h2>
        <ul>
          {reports.map((report) => (
            <li key={report.hist}>{report.hist}</li>
          ))}
        </ul>
        {/* <button onClick={addReport}>Add Report</button> */}
      </div>
    </div>
  );
};

export default Report;
