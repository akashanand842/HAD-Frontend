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

import React  from "react";
import { useState,useEffect } from "react"
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import { Grid,Paper,Select,Button,Box, Typography,TextField,FormControl,InputLabel} from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem'; 

//Table1
function createData(name, dateofupload) {
    return { name, dateofupload };
  }
  
  const rows = [
    createData('','','')
  ];

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const label = { inputProps: { 'aria-label': 'Switch demo' } };


const RoomPageDoctor=() =>
{
   
    const [roomId,setRoomId]=useState(123);
    const [load,setLoad]=useState(false);
    const [inputField,setInputFields] =useState([
        {medicine : "",dosage:""}
    ])
    const navigate =useNavigate();

    const doctor_obj = JSON.parse(localStorage.getItem('doctor'));
    const doctorId = doctor_obj['doctorId'];
    const jwtToken = localStorage.getItem('token');
    const doctorName = doctor_obj['doctorName'];

    useEffect(()=>{
        axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
        axios.post(`http://localhost:8081/doctor/consultation/${doctorId}`)
        .then((response)=>{
            setRoomId(response.data.first);  
            setLoad(true); 
        })
        .catch((error)=>{
            console.log('error while pop patient from queue',error);
        })
    },[])

    //     if(!load)
    // {
    //     return <div>Loading...</div>;
        
    // }

    const roomnum=roomId.toString();

    const myMeeting=async(element)=> {
        const appID = 121940273 ;
        const serverSecret = "c774162ad11624d4246a0aee5fb875f3";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomnum, Date.now().toString(), doctorName); 

        const zp= ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
          container:element,
          scenario:{
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
          layout: "Grid", 
          maxUsers: 2, 
          showRoomTimer: true,
          turnOnMicrophoneWhenJoining: false,
          turnOnCameraWhenJoining: false,
          showLeavingView: false,

        onLeaveRoom: (()=>{
                navigate('/add-prescription',{
                    state:{patient_id:2,doctor_id:doctorId}
                });
                window.location.reload('false');
            })
        })    
    } 

    //Prescription 

    const handleFormChange=(index,event)=>{
        let data=[...inputField]
        data[index][event.target.name]=event.target.value;
        setInputFields(data)
    }

    const addFields=(event)=>{
        event.preventDefault();
        let newField={medicine : "",dosage:""}
        setInputFields([...inputField,newField])
    }
    return(
        <>

          <Grid container spacing={2}>

            <Grid item xs={8} style={{ width: '84vw', height: '94vh' }} ref={myMeeting}></Grid>

            <Grid item xs={4}>
                <Paper sx={{marginTop:'20px',marginRight:'20px' , padding:'32px', justifyContent:'center'}} elevation={4} >
                    <Typography>
                        Patient Name:
                    </Typography>
                    <Typography>
                        Patient Id:
                    </Typography>

                    {/* Health Record Table */}
                    <TableContainer sx={{marginTop:'20px'}} component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Date of Upload</TableCell>
                                    <TableCell align="right">View Reports</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.dateofupload}</TableCell>
                                    <TableCell align="right">
                                    <Button type="submit"
                                        variant="contained"
                                        size='small'
                                        textAlign='center'
                                        sx={{ mt: 1}}>
                                        View
                                    </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography sx={{marginTop:'40px'}} variant="h4" textAlign={"center"}>
                        Prescription
                    </Typography>

                    <Grid item xs={12} sm={6.1} sx={{marginTop:'20px' }} >
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Symptoms"
                        name="Symptoms"
                        />
                    </Grid> 
                    
                    {/* Prescription Table */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400,marginTop:'20px'}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center" >Medicine</StyledTableCell>
                                    <StyledTableCell align="center">Dosage</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {inputField.map((input,index) => (
                                    <StyledTableRow key={index.name}>
                                        <StyledTableCell >
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Medicine"
                                                name="medicine" 
                                                value={input.medicine}
                                                onChange={(e)=>handleFormChange(index,e)}/>
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Dosage"
                                                name="dosage" 
                                                value={input.dosage}
                                                onChange={(e)=>handleFormChange(index,e)}/>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </TableContainer>

                    <Button
                        sx={{backgroundColor: "#e3f2fd" , mt: 1,color: "#0d47a1"}}
                        type="submit"
                        fullWidth
                        variant="outline"
                        // sx={{ mt: 1}}
                        onClick={addFields} >
                        Add more +
                    </Button> 
                    <Grid item xs={12} sm={6.1} sx={{marginTop:'20px' }} >
                            <TextField
                            variant="outlined"
                            label="Advice"
                            name="Advice"
                            />            
                    </Grid>

                    <Grid item sx={{marginTop:'20px' }} > 
                        <Switch {...label} />
                        <span sx={{marginLeft:'2rem'}}>Follow Up</span>
                    </Grid>

                    <Grid item sx={{marginTop:'20px' }} >
                        <FormControl sx={{width:'150px'}}>
                        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age" >
                            <MenuItem value={'3 days'}>3 days</MenuItem>
                            <MenuItem value={'5 days'}>5 days</MenuItem>
                            <MenuItem value={'7 days'}>7 days</MenuItem>
                            <MenuItem value={'15 days'}>15 days</MenuItem>
                            <MenuItem value={'1 month'}>1 month</MenuItem>
                            <MenuItem value={'3 month'}>3 month</MenuItem>
                            <MenuItem value={'6 month'}>6 month</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>

                    <Grid item sx={{marginTop:'20px' }} >
                        Generate Prescription
                        <span>
                        <Button type="submit"
                                variant="contained"
                                size='medium'
                                textAlign={"center"}
                                sx={{ mt: 1, marginLeft:'10px'}}>
                                Upload
                            </Button> 
                        </span>
            
                    </Grid>
                </Paper>      
            </Grid> 
        </Grid>  
    </>
        
    )
}

export default RoomPageDoctor ;