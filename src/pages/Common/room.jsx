import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';
import { useEffect,useState } from 'react';
import "../../Css_files/VideoCall.css"
import { useMemo } from 'react';

const RoomPage=()=>{

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
        const appID =121940273
        const serverSecret ="c774162ad11624d4246a0aee5fb875f3";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomnum,roomnum,'sudhanshu');
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom(
            {
            container:element,
            scenario:{
               mode:ZegoUIKitPrebuilt.VideoConference
            },
        }
        )
    }
    
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
        <div className='RoomCss' ref={myMeeting()}></div>
      </div>
    )
}

export default RoomPage;