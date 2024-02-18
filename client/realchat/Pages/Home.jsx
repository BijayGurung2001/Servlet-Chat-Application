import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket=io('http://localhost:4000');

const Home = () => {
    const [messages, setMessages]=useState([]);
    const [message, setMessage]=useState('')

    useEffect(()=>{
        socket.on('message',(data)=>{
            setMessages([...message, data])
            console.log(messages)
        });
        return()=>{
            socket.disconnect()
        }
    },[messages]);
    const handleSendMessage=()=>{
        socket.emit('message',{text:message});
        setMessage('');
    }
  return (
    <div>
        <div>
{messages.map((msg,index)=>{
    <div key={index}>{msg.text}</div>
    
})}
</div>
<div>
    <input 
    type="text"
    value={message}
    onChange={(e)=>setMessage(e.target.value)}
    />
    <button onClick={handleSendMessage}>Send</button>
</div>
    </div>
  )
}

export default Home