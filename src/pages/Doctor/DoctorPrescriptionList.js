import React, { useState} from "react";
import SideNav from "../../components/SideNav";
import axios from "axios";
import DataTable from "react-data-table-component";
import "../../Css_files/DoctorHistory.css";
import { Button, Modal } from "react-bootstrap";


export const DoctorPrescriptionList = () => {
  const doctor_obj = JSON.parse(localStorage.getItem("doctor"));
  const doctorId = doctor_obj['doctorId'];
  const [show, setShow] = useState(false);
  const [prescriptionData, setPrescriptionData] = useState({});
  const handleClose = () => setShow(false);
  const [obj, setObj] = useState([]);
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctor/prescription-list/${doctorId}`)
  .then((response)=>{
    setObj(response.data);
    console.log(response);
  })
  .catch((error)=>{
    console.error('error on fetching prescription',error);
  })
  const handleShow = (data) => {
    setPrescriptionData(data);
    setShow(true);
  };
  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Patient",
      selector: (row) => row.patientName,
    },
    {
      name: "View",
      button: true,
      cell: (row) => <button onClick={() => handleShow(row)}>View</button>,
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
    <div className="doctor_background">
      <SideNav />
      <div className="container-fluid-v">
        <div className="card-v">
          <h1>Prescription Lists</h1>
          <DataTable
            columns={columns}
            data={obj}
            fixedHeader
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            customStyles={customStyles}
          />

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Prescription Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Date: {prescriptionData?.date}</p>
              <p>Medical finding: {prescriptionData?.medicalFinding}</p>
              <p>Medicine name: {prescriptionData?.medicineName}</p>
              <p>Dosage: {prescriptionData?.dosage}</p>
              <p>Duration: {prescriptionData?.duration}</p>
              <p>Patient name: {prescriptionData?.patientName}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};