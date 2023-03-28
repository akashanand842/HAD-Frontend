import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const VideoCall= ()=>{
    const navigate = useNavigate();
    const [roomCode,setRoomCode] = useState('')

    // const handleSubmit= (ev)=>{
    //   ev.preventDefault();
    //   navigate(`/room/${roomCode}`);
    // }
    const handleSubmit=()=>{
      navigate('/room')
    }
    return (
      <div>
        <label>Enter room code</label>
        <input type="text" value={roomCode} onChange={e=> setRoomCode(e.target.value)} />
        <button onClick={handleSubmit}>Enter Room</button>
      </div>
    
    );
};

export default VideoCall;