const { Server } = require('socket.io')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = new Server(server);


app.get('/',(req,res)=>{
    res.send("Hello! Developer ")
})

server.listen(process.env.PORT,()=>{
    console.log("listing 3000...."+process.env.PORT)
})
io.on('connect',(soc)=>{
    console.log("connected")

    soc.on('hello',(data)=>{
        console.log(data)
        soc.emit('found',Date.now().toString())
    })
    
})