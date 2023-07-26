import React from "react";
import { Link } from "react-router-dom";
import './Dash.css';
function Dash() {
    return (
     <div>
        <div className="dashcard">
          <h1 className="dashh">DASHBOARD</h1>
          <div className="appcard">
             <div>
                <div>
                    <h2 className="dashh2"><Link to='/appt' style={{textDecoration:"none",color:"black"}} >APPOINMENT SCHEDULING</Link></h2>
                    <p className="ptag">The application may include a feature for
scheduling patient appointments. Healthcare providers can view and manage 
appointment calendars, schedule follow-ups, send appointment reminders to 
patients, and track appointment history.</p>
                </div>
             </div>
          </div>
          <div className="ehrcard">
             <div>
                <div>
                    <h2 className="dashh2"><Link to='/ehr' style={{textDecoration:"none",color:"black"}}>EHR</Link></h2>
                    <p className="ptag">The application stores and manages patient 
electronic health records, which include a comprehensive collection of patient 
medical information, such as medical history, diagnoses, medications, allergies, 
test results, treatment plans, and progress notes. </p>
                </div>
             </div>
          </div>
          <div className="recard">
             <div>
                <div>
                    <h2 className="dashh2"><Link to='/rep' style={{textDecoration:"none",color:"black"}}>YOUR REPORTS</Link></h2>
                    <p className="ptag">The application offers reporting and analytics 
capabilities, allowing healthcare providers to generate reports on patient 
demographics, diagnoses, treatments, and outcomes. These reports help with 
quality improvement initiatives, research, and decision-making.</p>
                </div>
             </div>
          </div>
        </div>
     </div>
    );
  }

export default Dash;

