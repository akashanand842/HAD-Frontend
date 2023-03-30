import React, { useState } from "react";
import "../../Css_files/DoctorHome.css";

const DoctorHome = () => {
  const [queue, setQueue] = useState(10);
  const [doctor, setDoctor] = useState('Sudhanshu');
  return (
    <>
      <div className="container">
        <div className="text">Welcome Dr. {doctor}</div>
        <div className="card">
          Patients in Queue : {queue}
        </div>
        <div className="bottom">
        <button>Start Call</button>
      </div>
      </div>

      
    </>
  );
};

export default DoctorHome;
