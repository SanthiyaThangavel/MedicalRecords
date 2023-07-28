import React,{Component} from "react";
import { Link } from "react-router-dom";
import './Firstpg.css';
function Firstpg(){
    return(
        <div>
            <p className="hs">HEALTH & <span className="news">BEYOND</span></p>
            <div className="cards-list">
        <div className="cardf 1">
          <div className="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
          <div className="card_title title-white">
            <p><Link to="/login">User Login</Link></p>
          </div>
        </div>
      </div>
      <div className="cards-list">
        <div className="cardf 2">
          <div className="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
          <div className="card_title title-white">
            <p><Link to='/plogin'>Admin Login</Link></p>
          </div>
        </div>
      </div>
        </div>
    );
}
export default Firstpg;