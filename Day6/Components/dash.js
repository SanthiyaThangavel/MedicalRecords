import React from "react";
import './Dash.css';
function Dash() {
    return (
     <div>
        <div className="dashcard">
          <h1 className="dashh">DASHBOARD</h1>
          <div className="ehrcard">
             <div>
                <div>
                    <h2 className="dashh2">APPOINMENT SCHEDULING</h2>
                    <p className="ptag">The application may include a feature for 
scheduling patient appointments. Healthcare providers can view and manage 
appointment calendars, schedule follow-ups, send appointment reminders to 
patients, and track appointment history.</p>
                </div>
             </div>
          </div>
          <div className="appcard">
             <div>
                <div>
                    <h2 className="dashh2">EHR</h2>
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
                    <h2 className="dashh2">YOUR REPORTS</h2>
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

export default Dash; 