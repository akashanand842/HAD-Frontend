import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage=()=>{
    const {roomId} =useParams(); 

    const myMeeting =async (element) =>{
        const appID =2135374471
        const serverSecret ="ecf072e91951d139f4164403b0e3c50f";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),'sudhanshu');
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference
            }
        });
    }

    return (
        <div ref={myMeeting}></div>
    )
}

export default RoomPage;