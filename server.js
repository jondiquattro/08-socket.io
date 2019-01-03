'use strict';
const fs = require('fs');

const io = require('socket.io')(3000);


io.on('connection', (socket)=>{
    // let file = process.argv.slice(2).shift();
    socket.emit('readFile');

    fs.watch('test.txt', function(event, filename) {
        socket.emit('file open');
     });
     socket.on('update text', (payload)=>{
         socket.broadcast.emit('update text','test.txt', payload)
     })

    socket.on('file open', (payload)=>{
        socket.emit('readFile',payload)
        
    })

    socket.on('speak', (payload)=>{
        console.log({payload});
        socket.broadcast.emit('message', payload)
       

    })
    
});



