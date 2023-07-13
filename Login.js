import React,{Component} from "react";
import './login.css';
import { Link } from "react-router-dom";
  function Logins() {
    return (
      <div>
        <div className="body" />
        <div className="grad" />
        <div className="header">
          <div>Health<span>Care</span></div>
        </div>
        <br />
        <div className="login">
          <input type="text" placeholder="username" name="user" /><br />
          <input type="password" placeholder="password" name="password" /><br />
          
         <Link to="/log"><button type="button">Login</button></Link>
         <p className=""><a href="#0" className="link">Don't have an account? <Link to="/sign">Sign Up</Link></a></p>
        </div>
      </div>
    );
  }
export default Logins;