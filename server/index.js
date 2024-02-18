const express=require('express')
const app=express();
const http=require('http');
const cors=require('cors');
const socketIO =require('socket.io')

app.use(cors());
const server=http.createServer(app);

//create an io server 
const io = socketIO(server);

io.on('connetion',(socket)=>{
    console.log('user connected');
    socket.on('message',(data)=>{
        io.emit('message',data);

    });
    socket.on('disconnect',()=>{
        console.log('user disconnect');
    });
})

server.listen(4000,()=>'server is running on port 4000')