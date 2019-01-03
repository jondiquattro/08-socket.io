`use strict`;
const io = require('socket.io-client');
const fs = require('fs');


const socket = io.connect('http://localhost:3000');



let updateText = (file, text) => {
    console.log('entered writemode')

    
   fs.writeFile( file, Buffer.from(text), (err, data) => {
       if(err) { throw err; }
       console.log(`${file} saved`);
     });
}

socket.on('update text', updateText)
module.exports = updateText