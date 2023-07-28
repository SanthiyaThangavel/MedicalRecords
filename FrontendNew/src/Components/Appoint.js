import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Appoint = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch the appointments from the backend when the component mounts
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/v1/auth/getapt');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const addAppointment = async () => {
    // Replace 'appointmentData' with the actual data for the new appointment you want to add
    const appointmentData = {
      Pname: 'Patient Name',
      dname: 'Doctor Name',
      date: '2023-07-26',
      time: '10:00 AM',
      fees: 100,
    };

    try {
      const response = await axios.post('/api/v1/auth/addapp', appointmentData);
      if (response.data) {
        // If the appointment is added successfully, refresh the list of appointments
        fetchAppointments();
      } else {
        console.error('Failed to add appointment.');
      }
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2>Your Appointments</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.Pname}>
              <strong>Patient Name:</strong> {appointment.Pname}<br />
              <strong>Doctor Name:</strong> {appointment.dname}<br />
              <strong>Date:</strong> {appointment.date}<br />
              <strong>Time:</strong> {appointment.time}<br />
              <strong>Fees:</strong> {appointment.fees}
            </li>
          ))}
        </ul>
        {/* <button onClick={addAppointment}>Add Appointment</button> */}
      </div>
    </div>
  );
};

export default Appoint;
