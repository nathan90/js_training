const path = require('path');
let pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
console.log(os.totalmem()/(1024*1024*1024))
console.log(os.freemem()/(1024*1024*1024))

const fs = require('fs');
// const files = fs.readdirSync('./'); //returns all the files and folders
const filesAsync = fs.readdir('./', (err, files) => {
    if (err) console.log('Error ', err);
    else console.log('Result', files);
})
//console.log(filesAsync); 


// event  - signal that indicates something has happened in our application

// e in EventEmitter is capital because it is a class
const EventEmitter = require('events');



//listener is a function that will be called when that event is raised
// register a listener
//emitter.on('messageLogged', () => console.log('Listener Called'));

//raised a event
//emitter.emit('messageLogged');
//making a noise or signal

// listener should be written before emit method is called
 
//Using Event Argument 

// register a listener
//emitter.on('messageLogged', (arg) => console.log('Listener Called', arg));// might use arg or e or eventArg
//raise a event
//emitter.emit('messageLogged', {id : 1, url : "http://"});
//by practice emit method is not written in the main file


// load the logger module and call the log function
const Logger = require('./logger.js');
const logger = new Logger();

// register a listener
logger.on('messageLogged', (arg) => console.log('Listener Called', arg));

//logger.log('message')

// HTTP Module
 
const http = require('http');

// This server is an event emitter so it has all the properties of event emitter
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end();
    }
    else if (req.url === '/api/courses') {
        res.write(JSON.stringify({name: "baboo", age : 233 }))
        res.end();
    }
});

//Handler for server
// server.on('connection', (socket) => {
//     console.log('New connection...');
// })
//server.listen(3000);
//console.log('Listening on port 3000');


