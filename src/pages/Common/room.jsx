import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';
import { useEffect,useState } from 'react';
import "../../Css_files/VideoCall.css"
import { useMemo } from 'react';

const RoomPage=()=>{
    // const {roomId} =useParams(); 
    // let roomnum="";// = roomid.toString();
    // for(let i=0;i<roomId.length;i++)
    // {
    //     roomnum+=roomId[i];
    // }
    // let roomid=parseInt(roomnum);
    const min = 100000;
    const max = 999999;
    const roomId = Math.floor(Math.random() * (max - min + 1)) + min;
    const roomnum = roomId.toString();
    console.log(roomnum)
    console.log(typeof(roomId))
    const myMeeting =(element) =>{
        
    //    const forqueue=(async()=>{
    //     await axios.post(`http://localhost:8081/patient/join-queue/${2}?roomId=${roomid}`,)
    //     .then(()=>{
    //         console.log('queue success');
    //     })
    //     .catch((error)=>{
    //       console.error('error on adding to queue',error);
    //     });
    //    })
        const appID =2066795294
        const serverSecret ="dd1496412c994d3e0f2b99f6717683e1";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomnum,roomnum,'sudhanshu');
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom(
            //forqueue(),
            {
            container:element,
            scenario:{
               mode:ZegoUIKitPrebuilt.VideoConference
            },
        }
        )
    }
    
    //  const ApiCheck=(()=>{
    //     result=useMemo(async ()=>{
    //         roomId= Math.floor(Math.random()*1000000);
    //         console.log(roomId)
    //         roomnum = roomId.toString();
    //         console.log(typeof(roomId));
    //         // function myFunction() {}
    //         // setTimeout(myFunction, 5000);
            
    //         await axios.post(`http://localhost:8081/patient/join-queue/${2}?roomId=${roomId}`,)
    //         .then((response)=>{
    //             console.log(response);
    //             console.log('queue success');
    //         })
    //         .catch((error)=>{
    //           console.error('error on adding to queue',error);
    //         })
    //         return roomnum;
    //     },[1])
    // })  
    
    useEffect(()=>{
        axios.post(`http://localhost:8081/patient/join-queue/${2}?roomId=${roomId}`,)
        .then((response)=>{
            console.log('queue success');
        })
        .catch((error)=>{
          console.error('error on adding to queue',error);
        });
        return ()=>{ console.log('return')}
    },[])
    return (
       
      <div>
        {/* <button onClick={myMeeting}>click me</button> */}
        <div className='RoomCss' ref={myMeeting()}></div>
      </div>
    )
}

export default RoomPage;