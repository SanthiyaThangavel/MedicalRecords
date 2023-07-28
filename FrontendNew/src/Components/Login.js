import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
// import NavBar from "./navbar";
import { setUsername, setPassword, setEmails, setLogged} from "./actions";
import "./Login.css";
import axios from "axios";

const Login = ({ username, email, password,logged, setUsername, setEmails, setPassword,setLogged }) => {
 

  const handleUsernameChange = (event) =>{
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmails(event.target.value);
    
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    
  };

  const handleShowAlert = async(e) => {
    e.preventDefault();
      const data = {
        email: email,
       password: password
      };
      try{
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate',data)
      .then((response)=>{
        console.log(response.data);
        localStorage.setItem('token',response.data.token);
        console.log(localStorage.getItem('token'));
      })      
      setLogged(true);
      alert("Login Successful."+username);
       navigate("/home");
      
      }
      catch(error){
        alert("Invalid Password");
      }

  };

  const navigate = useNavigate();

  return (
      
      <div className="main">
        <form className="form1" onSubmit={handleShowAlert}>
            <label className="sign">User Login</label>
            <input 
              className="un"
              value={username} 
              type="text" 
              name="name" 
              placeholder="UserName" 
              onChange={handleUsernameChange}
              required 
            />
            <input 
              className="un"
              value={email} 
              type="email" 
              name="email" 
              placeholder="Email" 
              onChange={handleEmailChange}
              required 
            />

            <input 
              className="pass"
              value={password} 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={handlePasswordChange}
              required 
            />    
            <button className="submit">Login</button>
            <Link style={{textDecoration:"none"}} to="/signup"><button>Don't have an account? Sign up</button></Link>
          </form> 
      </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
  email: state.email,
  password: state.password, 
  logged: state.logged,
});

const mapDispatchToProps = {
  setUsername,
  setEmails,
  setPassword,
  setLogged,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);