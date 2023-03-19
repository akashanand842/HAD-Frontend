import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage=()=>{
    const {roomId} =useParams(); 
    const func=()=>{
        console.log('sudhanshu kumar chauhan');
    }
    const myMeeting =async (element) =>{
        const appID =2066795294
        const serverSecret ="dd1496412c994d3e0f2b99f6717683e1";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),'sudhanshu');
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        
        
        zp.joinRoom(
            {
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference
            },
        });
    }

    return (
        <div ref={myMeeting(func())}></div>
    )
}

export default RoomPage;