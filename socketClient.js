const {io} = require('socket.io-client')

var socket  = io('http://localhost:3000/')

socket.on('connect',()=>{
    socket.emit('hello',{data:'nishchit'})

    socket.on('found',data=>{
        console.log(data)
    })
})

