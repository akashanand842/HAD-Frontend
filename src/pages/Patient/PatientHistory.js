import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import PatientSideNav from "../../components/PatientSideNav";
import axios from "axios";

export const PatientHistory = () => {
  const patient_obj = JSON.parse(localStorage.getItem("patient"));
  const patientId = patient_obj["patientId"];
  const jwtToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  useEffect(() => {
    const getConsultations = async() => {
        await axios.get(`http://localhost:8081/patient/get-history-patient/${patientId}`)
        .then((response) => {
            console.log(response.data);
            setObj(response.data);
        })
        .catch((err) => {
            console.error(err);
        });
    }
    getConsultations();
  }, []);
  const dummy = [
    {
        time : '12:10:00',
        doctorName : "Dr" + " Akash",
        date : "12/11/2022",
    },
    {
        time : '12:10:00',
        doctorName : "Dr" + " Akash",
        date : "12/11/2022",
    },
    {
        time : '12:10:00',
        doctorName : "Dr" + " Akash",
        date : "12/11/2022",
    },
    {
        time : '12:10:00',
        doctorName : "Dr" + " Akash",
        date : "12/11/2022",
    },
    {
        time : '12:10:00',
        doctorName : "Dr" + " Akash",
        date : "12/11/2022",
    }
  ];
  const [obj, setObj] = useState(dummy);
  const columns = [
    {
        name: "Time",
        selector: (row) => row.date,
        sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    
    {
      name: "Patient Name",
      selector: (row) => row.doctorName,
    },
  ];
  const paginationComponentOptions = {
    noRowsPerPage: true,
    selectAllRowsItem: true,
  };
  const customStyles = {
    rows: {
      style: {
        fontSize: "16px",
        padding: "10px 10px",
      },
    },
    headRow: {
      style: {
        fontSize: "20px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        fontWeight: "bold",
        padding: "10px 10px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };
  return (
    <>
      <div className="background-img">
        <PatientSideNav />
        <div className="container-fluid-v">
          <div className="card-v">
            <h1>History</h1>
            <DataTable
              columns={columns}
              data={obj}
              fixedHeader
              pagination
              paginationComponentOptions={paginationComponentOptions}
              //   paginationRowsPerPageOptions={[4]}
              paginationPerPage={5}
              customStyles={customStyles}
            ></DataTable>
          </div>
        </div>
      </div>
    </>
  );
};
