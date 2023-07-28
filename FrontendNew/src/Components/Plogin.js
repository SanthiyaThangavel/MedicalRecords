import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Login.css';
function Plogin() {
  const navigate=useNavigate();
  const [username,setUserName]=useState('');
  const [password, setPassword]=useState('');
    
  const handlelogin=(e)=>{
    e.preventDefault();
    if(username.trim()===''||password.trim()===''){
      alert('Please enter valid login credentials');
      return;
    }
    navigate('/home');
    };
  return (
      <div>
        <div className="main">
          <p className="sign" align="center">Admin Login</p>
          <form className="form1" onSubmit={handlelogin}>
            <input
              className="un"
              type="text"
              name="username"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              required
              placeholder="Username"
            />
            <input
              className="pass"
              type="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
            />
            <button className="submit" align="center" type="submit">Login</button>

            <p className="loginp">
              <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
                Don't have an Account? SIGN UP HERE
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
}
export default Plogin;
