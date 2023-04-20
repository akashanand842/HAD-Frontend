// import React from "react";
// import SideNav from "../../components/SideNav";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import DataTable from "react-data-table-component";
// import '../../Css_files/DoctorHistory.css'

// const DoctorHistory = () => {
//   const doctor_obj = JSON.parse(localStorage.getItem("doctor"));
//   const doctorContact = doctor_obj["contact"];
//   const tmp = [
//     {
//       id: 1,
//       date: "30/01/2023",
//       time: "1:00:PM",
//       patientName: "A",
//     },
//     {
//       id: 2,
//       date: "29/01/2023",
//       time: "2:00:PM",
//       patientName: "kash",
//     },
//     {
//       id: 3,
//       date: "28/01/2023",
//       time: "1:00:PM",
//       patientName: "ash",
//     },
//     {
//       id: 4,
//       date: "27/01/2023",
//       time: "1:00:PM",
//       patientName: "Ash",
//     },
//     {
//       id: 5,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "sh",
//     },
//     {
//       id: 6,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "h",
//     },
//     {
//       id: 7,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "As",
//     },
//     {
//       id: 8,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "ka",
//     },
//     {
//       id: 9,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "kas",
//     },
//     {
//       id: 10,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "Aah",
//     },
//     {
//       id: 11,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "Akash",
//     },
//     {
//       id: 12,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "kah",
//     },
//     {
//       id: 13,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "kas",
//     },
//     {
//       id: 14,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "kahh",
//     },
//     {
//       id: 15,
//       date: "26/01/2023",
//       time: "1:00:PM",
//       patientName: "Ah",
//     },
//   ];

//   const [obj, setObj] = useState(tmp);
//   const [ex, setEx] = useState([]);
//   const columns = [
//     {
//       name: "Date",
//       selector: (row) => row.date,
//       sortable : true
//     },
//     {
//       name: "Time",
//       selector: (row) => row.time,
//     },
//     {
//       name: "Patient",
//       selector: (row) => row.patientName,
//     },
//   ];
//   useEffect(async () => {
//       await axios.get(
//           `http://localhost:8081/doctor/get-history/${doctorContact}`
//       )
//       .then((response) => {
//         setObj(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       })
      

//   }, []);

//   const paginationComponentOptions = {
//     noRowsPerPage : true,
//     selectAllRowsItem: true,
// };

//   return (
//     <>
//       <SideNav />
//       <div className="container-fluid-v">
//         <div className="card-v">
//         <h1>Consultations</h1>
//           <DataTable columns={columns} data={obj} fixedHeader pagination paginationComponentOptions={paginationComponentOptions}></DataTable>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DoctorHistory;
import React from 'react'
import SideNav from '../../components/SideNav'

const DoctorHistory = () => {
  return (
    <>
    <SideNav/>
    <div>
       Hello history page this is
    </div>
    </>
  )
}

export default DoctorHistory
