const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (n) => {
    console.log("First event",n);
})

eventEmitter.emit('greet',900);
eventEmitter.emit('greet',900);
eventEmitter.emit('greet',900);


