import React,{Component} from "react";
import './Homepg.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
    function Homepg({username}) {
      return (
        <div>
          <nav className="navbar">
            <h1 className="navnew">Health&Beyond</h1>
            <ul>
              <li><a>{username}</a></li>
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
        <li class="side-bar"><a href="#"><Link to="/dash"  style={{textDecoration:"none",color:"white"}}>DashBoard</Link></a></li>
        <li class="side-bar"><a href="#"><Link to="/prof"  style={{textDecoration:"none",color:"white"}}>Personal Profile</Link></a></li>
        <li class="side-bar"><a href="#"><Link to="/"  style={{textDecoration:"none",color:"white"}}>Logout</Link></a></li>
      </ul>
    </div>
  </div>
  <section id="home" className="sectionhome">
            
            <h1>Welcome To The Site</h1>
            <p className="lead">Personal health records ( PHR s) can help your patients better manage their care. </p>
            <p className="lead">Having important health information – such as immunization records, lab results, and screening due dates </p>
            <p className="lead">– in electronic form makes it easy for patients to update and share their records.</p>
            <p className="lead">Health systems are organizations established to meet the health needs of targeted populations.</p>
            <p className="lead">An efficient healthcare system can contribute to a significant part of a country's economy, development, and industrialization.</p>
          </section>
          <section id="about"  className="sectionhome">
            <h1>About Us</h1>
            <p className="lead">our Health centers are community-based and patient-directed organizations that provide affordable,</p>
            <p className="lead">accessible, high-quality primary health care services to individuals and families, </p>
            <p className="lead">including people experiencing homelessness, agricultural workers, residents of public housing, and veterans</p>
            <p className="lead" >All the details about you and your health will be monitered by us.  </p>
            <p className="lead">For your Good health, we are here to help and guide through our website.</p>
            <p className="lead">In case of any emergencies, you can contact us 24/7, we are here for your better health care.</p>
          </section>
          <section id="service"  className="sectionhome">
            <h1>Services</h1>
            <p className="lead">We will have all your health records and all the information needed </p>
            <p className="lead">to maintain your good health in a prespective manner.</p>
          </section>
          <section id="contact"  className="sectionhome">
            <h1>Contact</h1>
            <p className="lead">Phone: 7200-0812-2191(upto 7 lines)</p>
            <p className="lead">email: healthcare125@gmail.com</p>
          </section>
        </div>
        );
    }
    const mapStateToProps = (state) => {
      return {
        
        username:state.username,
        
      };
    };
    export default  connect(mapStateToProps)(Homepg)
