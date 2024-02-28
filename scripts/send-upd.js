const dgram = require('dgram');

// Get the argument from the command line
const myArgument = process.argv[2];

// UDP client
const udpClient = dgram.createSocket('udp4');
udpClient.send(myArgument, 5000, 'localhost', (err) => {
    if (err) throw err;
    console.log('Message sent via UDP');
    udpClient.close();
});