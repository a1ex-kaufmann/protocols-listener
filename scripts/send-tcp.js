const net = require('net');

// Get the argument from the command line
const myArgument = process.argv[2];

// TCP client
const tcpClient = new net.Socket();
tcpClient.connect(6000, 'localhost', () => {
    console.log('Connected to TCP server');
    tcpClient.write(myArgument);
    tcpClient.end();
});
