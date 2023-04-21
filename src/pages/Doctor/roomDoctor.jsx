// import React from 'react'
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import axios from 'axios';
// import { useState,useEffect } from 'react';
// import LinearProgress from '@mui/material/LinearProgress';
// import SideNav from '../../components/SideNav';
// import "../../Css_files/DoctorRoom.css";
// import { useNavigate } from 'react-router-dom';

// const RoomPageDoctor=()=>{

//     const [roomId,setRoomId]=useState(123);
//     const [load,setLoad]=useState(false);
//     const navigate =useNavigate();

//     const doctor_obj = JSON.parse(localStorage.getItem('doctor'));
//     const doctorId = doctor_obj['doctorId'];
//     const jwtToken = localStorage.getItem('token');
//     const doctorName = doctor_obj['doctorName'];

//     useEffect(()=>{
//         axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
//         axios.post(`http://localhost:8081/doctor/consultation/${doctorId}`)
//         .then((response)=>{
//             setRoomId(response.data.first);
//             setLoad(true);
//         })
//         .catch((error)=>{
//             console.log('error while pop patient from queue',error);
//         })
//     },[])
//     if(!load)
//     {
//         <LinearProgress />
//         return <div>Loading...</div>;

//     }

//     console.log(typeof(roomId))
//     const roomnum=roomId.toString();
//     console.log(roomnum);
//     const myMeeting = (element) =>{

//         const appID =121940273
//         const serverSecret ="c774162ad11624d4246a0aee5fb875f3";
//         const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomnum,'123456', doctorName);
//         const zp = ZegoUIKitPrebuilt.create(kitToken);

//         zp.joinRoom(
//             {
//             container:element,
//             scenario:{
//                 mode:ZegoUIKitPrebuilt.VideoConference
//             },
//             maxUsers: 2,
//             turnOnCameraWhenJoining:false,
//             turnOnMicrophoneWhenJoining:false,
//             showLeavingView: false,
//             onLeaveRoom: (()=>{
//                 navigate('/add-prescription',{
//                     state:{patient_id:2,doctor_id:doctorId}
//                 });
//                 window.location.reload('false');
//             })
//         });
//     }

//     return (
//         <>
//         <div className='D_room'>
//         <div ref={myMeeting}/>
//         </div>
//         </>
//     )
// }

// export default RoomPageDoctor;

import React from "react";
import { useState, useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Paper,
  Select,
  Button,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";

//Table1
function createData(name, dateofupload) {
  return { name, dateofupload };
}

const rows = [createData("", "", "")];

//Table2
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#e3f2fd",
    color: theme.palette.common.black,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

const RoomPageDoctor = () => {
  const [roomId, setRoomId] = useState(123);
  const [load, setLoad] = useState(false);
  const [appointment, setAppointment] = useState({
    symptoms: "Fever",
    specialization: "Physician",
    description: "3 days Fever",
    patientId: 2,
  });
  const [prescription, setPrescription] = useState({
    date: new Date(),
    medicalFinding: "Little Crack",
    medicineName: "Combiflaim",
    dosage: "20mg",
    duration: "1 week",
  });
  const [inputField, setInputFields] = useState([{ medicine: "", dosage: "" }]);
  const navigate = useNavigate();

  const doctor_obj = JSON.parse(localStorage.getItem("doctor"));
  const doctorId = doctor_obj["doctorId"];
  const jwtToken = localStorage.getItem("token");
  const doctorName = doctor_obj["doctorName"];
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

  useEffect(async () => {
      await axios.post(`http://localhost:8081/doctor/consultation/${doctorId}`)
        .then((response) => {
          setRoomId(response.data.first);
          setAppointment({ ...appointment, patientId: response.data.first });
          setLoad(true);
          axios.get(`http://localhost:8081/doctor/get-appointment-details/${response.data.first}`)
               .then((response) => {
                console.log(response.data);
                setAppointment(response.data);
               })
            .catch((err) => {
                console.log(err);
            });
        })
        .catch((error) => {
          console.log("error while pop patient from queue", error);
        });
  }, []);

      if(!load)
  {
      return <div>Loading...</div>;

  }

  const roomnum = roomId.toString();

  const myMeeting = async (element) => {
    const appID = 121940273;
    const serverSecret = "c774162ad11624d4246a0aee5fb875f3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomnum,
      Date.now().toString(),
      doctorName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      layout: "Grid",
      maxUsers: 2,
      showRoomTimer: true,
      turnOnMicrophoneWhenJoining: false,
      turnOnCameraWhenJoining: false,
      showLeavingView: false,

      onLeaveRoom: () => {


        navigate('/DoctorPage')
        window.location.reload("false");
      },
    });
  };

  //Prescription

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPrescription(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(prescription);
    // submit prescription data to backend
  };

  const addFields = (event) => {
    event.preventDefault();
    let newField = { medicine: "", dosage: "" };
    setInputFields([...inputField, newField]);
  };

 const submitPrescription=()=>{
    axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
    axios.post(`http://localhost:8081/doctor/add/prescription/${roomId}/${doctorId}`, prescription)
      .then((response) => {
          console.log(response);
      })
      .catch((error) => {
        console.error('Error adding prescription:', error);
      });
 }

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={8}
          style={{ width: "84vw", height: "94vh" }}
          ref={myMeeting}
        ></Grid>

        <Grid item xs={4}>
          <Paper
            sx={{
              marginTop: "20px",
              marginRight: "20px",
              padding: "32px",
              justifyContent: "center",
            }}
            elevation={4}
          >
            <Typography>Patient Name:</Typography>

            {/* Health Record Table */}
            <Card sx={{ minWidth: 275, margin: "10px" }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Appointment Details
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {appointment.date}
                </Typography>
                <Typography variant="body2">{`Symptoms: ${appointment.symptoms}`}</Typography>
                <Typography variant="body2">{`Specialization: ${appointment.specialization}`}</Typography>
                <Typography variant="body2">{`Description: ${appointment.description}`}</Typography>
              </CardContent>
            </Card>

            {/* Prescription Table */}
            <Container maxWidth="sm">
              <Box sx={{ mt: 5 }}>
                <Typography
                  variant="h4"
                  align="center"
                  component="h1"
                  gutterBottom
                >
                  Prescription Form
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    name="medicalFinding"
                    label="Medical Finding"
                    value={prescription.medicalFinding}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    name="medicineName"
                    label="Medicine Name"
                    value={prescription.medicineName}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    name="dosage"
                    label="Dosage"
                    value={prescription.dosage}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    name="duration"
                    label="Duration"
                    value={prescription.duration}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3 }}
                    fullWidth onClick={submitPrescription}
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            </Container>      
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default RoomPageDoctor;