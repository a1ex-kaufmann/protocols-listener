const dgram = require('dgram');

// Get the argument from the command line
const port = process.argv[2];
const msg = process.argv[3];

// UDP client
const udpClient = dgram.createSocket('udp4');
udpClient.send(msg, port, '127.0.0.1', (err) => {
    if (err) throw err;
    console.log('Message sent via UDP');
    udpClient.close();
});