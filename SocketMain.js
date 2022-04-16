const { Server } = require('socket.io')
const app = require('express')
const http = require('http')
const server = http.createServer(app)
const io = new Server(server);


app.length('/',(req,res)=>{
    res.send("Hello! Developer ")
})

server.listen(3000,()=>{
    console.log("listing 3000....")
})
io.on('connect',(soc)=>{
    console.log("connected")

    soc.on('hello',(data)=>{
        console.log(data)
        soc.emit('found',Date.now().toString())
    })
    
})