const express=require('express')
const app=express();
const http=require('http');
const cors=require('cors');

app.use(cors());
const server=http.createServer(app);

//create an io server and allow for cors
const io= new server(server,{
    cors:{
        origin:'http:localhost:3000',
        methods:['GET','POST'],
    }
})
//listen for when the client connects via socket.io-client
io.on('connect',(socket)=>{
    console.log(`user Connected ${socket.id}`)
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})

server.listen(4000,()=>'server is running on port 4000')