const net = require('net');

// Get the argument from the command line
const port = process.argv[2];
const myArgument = process.argv[3];

// TCP client
const tcpClient = new net.Socket();
tcpClient.connect(port, '127.0.0.1', () => {
    console.log('Connected to TCP server');
    tcpClient.write(myArgument);
    tcpClient.end();
});
