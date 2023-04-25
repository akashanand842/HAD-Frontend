import React from "react";
import { useState, useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Paper,
  Button,
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Container,
} from "@mui/material";

const RoomPageDoctor = () => {
  const [roomId, setRoomId] = useState(123);
  const [load, setLoad] = useState(false);
  const [prescriptionSubmit, setPrescriptionSubmit] = useState(false);
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

  const navigate = useNavigate();

  const doctor_obj = JSON.parse(localStorage.getItem("doctor"));
  const doctorId = doctor_obj["doctorId"];
  const jwtToken = localStorage.getItem("token");
  const doctorName = doctor_obj["doctorName"];
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

  useEffect(async () => {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/doctor/consultation/${doctorId}`)
        .then((response) => {
          setRoomId(response.data.first);
          setAppointment({ ...appointment, patientId: response.data.first });
          setLoad(true);
          axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctor/get-appointment-details/${response.data.first}`)
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

 const submitPrescription = async () => {
    setPrescriptionSubmit(true);
    axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/doctor/add/prescription/${roomId}/${doctorId}`, prescription)
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
          style={{ width: "84vw", height: "94vh" , marginTop:"0",marginBottom:"0"}}
          ref={myMeeting}
        ></Grid>

        <Grid item xs={4}>
          <Paper
            sx={{
              marginTop: "20px",
              marginRight: "20px",
              padding: "32px",
              justifyContent: "center",
              height: "630px",
              overflow: "auto",
            }}
            elevation={4}
          >
            {/* <Typography>Patient</Typography> */}

            {/* Health Record Table */}
            <Card
              sx={{
                minWidth: 275,
                margin: "10px",
                padding: "20px",
                boxShadow: "none",
                backgroundColor: "#f0f0f0",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ marginBottom: "10px" }}
                >
                  Appointment Details
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                  <strong>Date:</strong> {appointment.date}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                  <strong>Symptoms:</strong> {appointment.symptoms}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                  <strong>Specialization:</strong> {appointment.specialization}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                  <strong>Description:</strong> {appointment.description}
                </Typography>
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
                    disabled={prescriptionSubmit}
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