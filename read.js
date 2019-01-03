'use strict';
const util = require('util')
const io = require('socket.io-client');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

const socket = io.connect('http://localhost:3000');

// socket.on('readFile', openFile);
socket.on('open', openFile);




function openFile (file) {
    console.log('called from readfile');
    console.log(file)

        readFile(file)
          .then(  (data)=>{
            let text = data.toString().toUpperCase();
            // Buffer.from(text)
            socket.emit('update text',Buffer.from(text));
          })
          .catch(console.log('this should be an event'));
}


// module.exports = readFile;