const EventEmitter = require('events');

let url = 'https://mylogger.io/log'
// extends event emitter means all the functionalities of eventEmitter class is added to logger class
class Logger extends EventEmitter{
     log = (message) => {
        //send an Http request
        console.log(message);
        //raise a event
        this.emit('messageLogged', {id : 1, url : "http://"});
    }

}

module.exports = Logger;
