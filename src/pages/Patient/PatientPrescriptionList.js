import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import PatientSideNav from "../../components/PatientSideNav";
import "../../Css_files/PatientPrescriptionList.css";

const PatientPrescriptionList = () => {

  const patient_obj = JSON.parse(localStorage.getItem("patient"));
  const patientId = patient_obj["patientId"];

  const jwtToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

  const handleDownload = async (prescriptionId) => {

    console.log(prescriptionId);

    try {
      const response = await axios.get(
        `http://localhost:8081/patient/prescription/${prescriptionId}`,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "prescription.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("error on downloading prescription");
    }
  };
  const tmp = [
    {
      id: 1,
      date: "30/01/2023",
      doctorName: "Dr Akash",
    },
    {
      id: 2,
      date: "31/01/2023",
      doctorName: "Dr Skash",
    },
    {
      id: 3,
      date: "1/02/2023",
      doctorName: "Dr Kash",
    },
    {
      id: 4,
      date: "2/01/2023",
      doctorName: "Dr Asha",
    },
    {
      id: 5,
      date: "2/01/2023",
      doctorName: "Dr Asha",
    },
    {
      id: 6,
      date: "2/01/2023",
      doctorName: "Dr Asha",
    },
    {
      id: 7,
      date: "2/01/2023",
      doctorName: "Dr Asha",
    },
    {
      id: 8,
      date: "2/01/2023",
      doctorName: "Dr Asha",
    },
    {
      id: 9,
      date: "2/01/2023",
      doctorName: "Dr Asha",
    },
    {
      id: 10,
      date: "2/01/2023",
      doctorName: "Dr Asha",
    },
    {
      id: 11,
      date: "2/01/2023",
      doctorName: "Dr Asha",
    },
    {
      id: 12,
      date: "2/01/2023",
      doctorName: "Dr Asha",
    },
  ];

  const [obj, setObj] = useState(tmp);
  const [ex, setEx] = useState([]);
  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Doctor Name",
      selector: (row) => row.doctorName,
    },
    {
      name: "Download",
      button: true,
      cell: (row) => (
        <button onClick={() => handleDownload(row.prescriptionId)}>
          Download
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      buttonStyle: {
        color: "#fff",
        backgroundColor: "#4CAF50",
        borderRadius: "10px",
        padding: "5px 5px",
        border: "none",
      },
    },
  ];
    useEffect( () => {
      const prescriptions = async () =>{
          await axios.get(`http://localhost:8081/patient/prescription-list/${patientId}`)
          .then((response) => {
              setObj(response.data);
              console.log(obj);
          })
          .catch((err) =>{
              console.log(err);
          })
      }
      prescriptions();
    }, []);

  const paginationComponentOptions = {
    noRowsPerPage: true,
    selectAllRowsItem: true,
  };
  const customStyles = {
    rows: {
      style: {
        fontSize: '16px',
        padding: "10px 10px"
      },
    },
    headRow: {
      style: {
        fontSize: '20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        fontWeight: 'bold',
        padding: "10px 10px"
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
  };

  return (
    <>
      <div className="background-img">
        <PatientSideNav />
        <div className="container-fluid-v">
          <div className="card-v">
            <h1>Download Prescription</h1>
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

export default PatientPrescriptionList;