'use strict';

const io = require('socket.io')(3000);
// const {saved, error, fileOpen} = require('./logger');
// const read = require('./read');
// const write = require('./write');




io.on('connection', (socket)=>{
    console.log('New Connection', socket.id);
    
    socket.on('readFile', (payload)=>{
        socket.broadcast.emit('file open',payload)
    })

    
    socket.on('speak', (payload)=>{
        console.log({payload});
        socket.broadcast.emit('message', payload)
       

    })
    socket.on
});



