'use strict';
const fs = require('fs');

const io = require('socket.io')(3000);


let file = process.argv.slice(2).shift();

io.on('connection', (socket)=>{
    // socket.emit('readFile',file);

    console.log('New Connection from server', socket.id);
    console.log(fs.ReadStream('test.txt',{start: 0, end: 10}))

    // fs.ReadStream('test.txt',{fd: true});

    socket.on('open', ()=>{
        console.log('open')
    })
 
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



