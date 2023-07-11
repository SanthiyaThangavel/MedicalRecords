import React,{Component} from "react";
import { Link } from "react-router-dom";
 function Logins() {
    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" />
        <link rel="stylesheet" href="style.css" />
        <title>3D Login Form</title>
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
               
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log" />
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <input type="name" name="PatientName" className="form-style" placeholder="Your Name" id="logemail" autoComplete="off" />
                              <i className="input-icon uil uil-at" />
                            </div>
                            <div className="form-group">
                              <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                              <i className="input-icon uil uil-at" />
                            </div>
                            <a href="#" className="btn mt-4"><Link to="/log">submit</Link></a>
                            <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Don't have an account? Sign Up</a></p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Logins;