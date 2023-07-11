import React,{Component} from "react";
import './home.css';
    function Homepg() {
      return (
  
        <div className="container">
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">EHR</a></li>
              <li><a href="#service">Report</a></li>
              <li><a href="#contact">Appoinment</a></li>
            </ul>
          </nav>
          <section id="home">
            <h1>Welcome To The Site</h1>
            <p className="lead">We are here for your Good health</p>
          </section>
          <section id="about">
            <h1>EHR</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
          </section>
          <section id="service">
            <h1>Report</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
          </section>
          <section id="contact">
            <h1>Appoinment</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
          </section>
        </div>
      );
    }
  export default Homepg;