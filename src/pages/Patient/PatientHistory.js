import React, { useState } from "react";
import DataTable from "react-data-table-component";
import PatientSideNav from "../../components/PatientSideNav";

export const PatientHistory = () => {
  const patient_obj = JSON.parse(localStorage.getItem("patient"));
  const patientId = patient_obj["patientId"];
  const [obj, setObj] = useState([]);
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
        <button onClick={() => {}}>
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
