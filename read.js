'use strict';

// const updateFile = require(`./write`);
// const {saved, error, fileOpen} = require('./logger');
// const event = require('./events');
const io = require('socket.io-client');


const socket = io.connect('http://localhost:3000');


let readFile = (file) => {
   fs.readFile( file, (err, data) => {
       if(err) { throw err; }
       let text = data.toString().toUpperCase();
       updateFile(file,text);
       //needs to be an event
       });
}

socket.on('readFile', readFile);

module.exports = readFile;