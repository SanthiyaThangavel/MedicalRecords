import React,{Component} from "react";
import './home.css';
import { Link } from "react-router-dom";
    function Homepg() {
      return (
        <div>
          <nav className="navbar">
            <h1 className="navnew">Health&Beyond</h1>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        <div class="col-md-3">
        <div id="sidebar">
          <div class="container-fluid tmargin">
            <div class="input-group">
            </div>
          </div>


      <ul class="nav navbar-nav side-bar">
        <li class="side-bar"><a href="#"><Link to="/dash" >DashBoard</Link></a></li>
        <li class="side-bar"><a href="#">Personal Profile</a></li>
        <li class="side-bar"><a href="#">Doctors</a></li>
        <li class="side-bar"><a href="#">Progress Notes</a></li>
        <li class="side-bar"><a href="#"><Link to="/" >Logout</Link></a></li>
      </ul>
    </div>
  </div>
          <section id="home" className="sectionhome">
            <h1>Welcome To The Site</h1>
            <p className="lead">We are here for your Good health</p>
          </section>
          <section id="about"  className="sectionhome">
            <h1>About Us</h1>
            <p className="lead" >Treatment Plans</p>
          </section>
          <section id="service"  className="sectionhome">
            <h1>Services</h1>
            <p className="lead">We will have all your health records and all the information needed to maintain your good health in a prespective manner.</p>
          </section>
          <section id="contact"  className="sectionhome">
            <h1>Contact</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
          </section>
        </div>
        );
    }
  export default Homepg;
          

