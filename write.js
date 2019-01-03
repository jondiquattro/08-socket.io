`use strict`;
const io = require('socket.io-client');


const socket = io.connect('http://localhost:3000');



let updateText = (file, text) => {
   fs.writeFile( file, Buffer.from(text), (err, data) => {
       if(err) { throw err; }
       console.log(`${file} saved`);
     });
}

module.exports = updateText