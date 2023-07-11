import React,{Component} from "react";
import './signup.css';
    function Signup() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <title>Signup</title>
          <link rel="stylesheet" type="text/css" href="signup.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.js" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css.map" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js" />
          <div className="form">
            <h1> Signup Here!</h1>
            <form action method="get" acceptCharset="utf-8">
              <input type="text" name placeholder="Your name" /><br />
              <input type="text" name placeholder="Contact" /><br />
              <input type="password" name placeholder="Password" /><br />
              <input type="password" name placeholder="Confirm Password" /><br />
              <input type="text" name placeholder="age" /><br />
              <input type="text" name placeholder="Address" /><br />
              <br />
              <select name="countries" className="datalist">
                <option className="selp" value="none">Insurance</option>
                <option className="selq" value="India">Yes</option>
                <option className="selq" value="Australia">No</option>
                
              </select>
             
              <h1 classname="newh1">Gender</h1>
              <input type="radio" name="gender" defaultValue="male" defaultChecked /><span className="rad">Male</span>
              <input type="radio" name="gender" defaultValue="female" /> <span className="rad">Female</span>
              <input type="radio" name="gender" defaultValue="other" />
              <span className="rad">Other</span>
              <button>Sign Up</button>
              <h3>Already have account ? <a className="aclk" href="#">Login Now!</a></h3>
            </form>
          </div>
        </div>
      );
    }
export default Signup;