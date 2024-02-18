import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({username,setUsername,room,setRoom, Socket}) => {
    const navigate=useNavigate();
    const joinRoom=()=>{
        if(room!== '' && username !==''){
            Socket.emit('join_room',{username,room});
        }
        navigate('/chat',{replace:true});
    }
  return (
    <div>
        <h1>{`<>Dev Rooms <>`}</h1>
        <input placeholder='username' onChange={(e)=>setUsername(e.target.value)}/><br></br>
        <select onChange={(e)=>setRoom(e.target.value)}>
            <options>--Select Rooms --</options>
            <options value="'javascript">Javascript</options>
            <options value="'node">Node</options>
            <options value="'express">Express</options>
            <options value="'react">React</options>
        </select><br></br>
        <button onClick={joinRoom}>Join Room</button>
    </div>
  )
}

export default Home