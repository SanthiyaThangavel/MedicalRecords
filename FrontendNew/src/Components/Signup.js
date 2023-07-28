import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import './Signup.css';
import Axios from 'axios';
function Signup() {
  const navigate=useNavigate();
  const [signupName,setSignupName]=useState('');
  const [signupcontact,setSignupContact]=useState('');
  const [signupPassword,setSignupPassword]=useState('');
  const [signupEmail,setSignupEmail]=useState('');
  const [signupAge,setSignupAge]=useState('');
  const [signupAddress,setSignupAddress]=useState('');
  const [signupInsurance,setSignupInsurance]=useState('');
  const [signupGender,setSignupGender]=useState('');
  const handlePost=(event)=> {
    event.preventDefault();
    const data= {
      name: signupName,
      contact: signupcontact,
      password: signupPassword,
      email: signupEmail,
      age: signupAge,
      address: signupAddress,
      insurance:signupInsurance,
      gender: signupGender,
    };
    Axios.post('http://localhost:8181/api/v1/auth/register', data);
      alert("successful");
      navigate("/");

      if (signupName.trim() === '') {
        alert('Enter a Patient name.');
        return;
      }
      if (signupcontact.trim() === '' || signupPassword.trim() === '' || signupAge.trim()==='' || signupEmail.trim()==='' || signupAddress.trim()==='' || signupInsurance.trim()==='' || signupAddress.trim()==='' || signupGender.trim==='') {
        alert('Enter valid signup credentials.');
        return;
      }
  };
    return (
      <div>
        <div className="mains">
          <p className="signs" align="center">Sign Up Here!!</p>
          <form className="form1">
            <input
              className="uns"
              type="text"
              name="name"
              value={signupName}
              onChange={(e)=>setSignupName(e.target.value)} required
              placeholder="Your name"
            />
            <input
              className="uns"
              type="text"
              name="contact"
              value={signupcontact}
              onChange={(e)=>setSignupContact(e.target.value)} required
              placeholder="Contact"
            />
            <input
              className="passs"
              type="password"
              name="password"
              value={signupPassword}
              onChange={(e)=>setSignupPassword(e.target.value)} required
              placeholder="Password"
            />
            <input
              className="uns"
              type="text"
              name="email"
              value={signupEmail}
              onChange={(e)=>setSignupEmail(e.target.value)} required
              placeholder="Email"
            />
            <input
              className="uns"
              type="text"
              name="age"
              value={signupAge}
              onChange={(e)=>setSignupAge(e.target.value)} required
              placeholder="Age"
            />
            <input
              className="uns"
              type="text"
              name="address"
              value={signupAddress}
              onChange={(e)=>setSignupAddress(e.target.value)} required
              placeholder="Address"
            />
            <select name="insurance" className="datalist" value={signupInsurance} onChange={(e)=>setSignupInsurance(e.target.value)}>
              <option className="selp" value="none">Insurance</option>
              <option className="selq" value="India">Yes</option>
              <option className="selq" value="Australia">No</option>
            </select>
            <select name="insurance" className="datalist" value={signupGender} onChange={(e)=>setSignupGender(e.target.value)}>
              <option className="selp" value="none">Gender</option>
              <option className="selq" value="India">Male</option>
              <option className="selq" value="Australia">Female</option>
              <option className="selq" value="Australia">Other</option>
            </select>

            <button className="submits" align="center" type="submit" onClick={handlePost}>Sign up</button>
            <p className="loginps">
              <Link to='/' style={{ textDecoration: "none", color: "black" }}>
                Already have an Account? Log In here
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }

export default Signup;
