'use strict';

const io = require('socket.io-client');
const event = require('./events');


const socket = io.connect('http://localhost:3000');

socket.on('message',(payload)=>{
    console.log('heard', payload)
})


let saved = ()=> {
   console.log(`file saved`);
};

let error = () => {
   console.log('You have a error');
};

let fileOpen = () => {
   console.log('file is open');
};
let fileWrite = () =>{
    console.log('File was written to.')
}
event.on('update text',saved);//from write
event.on('error', error);
event.on('readFile', fileOpen);
event.on('update text', fileWrite)

module.exports = {saved, error, fileOpen};