import Home from '../Pages/Home'
import './App.css'
import io from 'socket.io-client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

const Socket=io.connect('http://localhost:5000');
function App() {
  const [username,setUsername]=useState('');
  const [room, setRoom]=useState('')
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={
              <Home
            username={username}
            setUsername={setUsername}
            room={room}
            setRoom={setRoom}
            Socket={Socket}
            />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
