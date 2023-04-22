import React from "react";
import SideNav from "../../components/SideNav";
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import '../../Css_files/DoctorHistory.css'

const DoctorHistory = () => {
  const doctor_obj = JSON.parse(localStorage.getItem("doctor"));
  const doctorContact = doctor_obj["contact"];

  const [obj, setObj] = useState([]);
  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable : true
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
    {
      name: "Patient",
      selector: (row) => row.patientName,
    },
  ];
  const jwtToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  useEffect(() => {
      axios.get(`http://localhost:8081/doctor/get-history/${doctorContact}`)
      .then((response) => {
        setObj(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);

  const paginationComponentOptions = {
    noRowsPerPage : true,
    selectAllRowsItem: true,
};

  return (
    <>
      <SideNav />
      <div className="container-fluid-v">
        <div className="card-v">
        <h1>Consultations</h1>
          <DataTable columns={columns} data={obj} fixedHeader pagination paginationComponentOptions={paginationComponentOptions}></DataTable>
        </div>
      </div>
    </>
  );
};

export default DoctorHistory;
