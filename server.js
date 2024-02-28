// Import required modules
const net = require('net');
const dgram = require('dgram');
const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');

// Create an HTTP server to serve an HTML page
const html = fs.readFileSync(__dirname + '/templates/index.html');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    console.log(`HTTP ${req.method} request for ${req.url}`);
    res.end(html);
}).listen(8000, () => {
    console.log('HTTP server listening on port 8000');
});

// Create a WebSocket server
const wss = new WebSocket.Server({port: 9000});
console.log('WS server listening on port 9000');
wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    console.log(`WebSocket client connected from ${ip}`);

    // Handle WebSocket messages from clients
    ws.on('message', (msg) => {
        console.log(`WebSocket message received: ${msg}`);
    });
});

// Create a TCP server
const tcpServer = net.createServer((socket) => {
    console.log('TCP client connected');
    // Handle TCP data from clients
    socket.on('data', (data) => {
        console.log(`TCP data received: ${data}`);
    });
});

// Create a UDP server
const udpServer = dgram.createSocket('udp4');
udpServer.on('message', (msg, rinfo) => {
    console.log(`UDP data received from ${rinfo.address}:${rinfo.port}: ${msg}`);
});

// Start listening on ports
tcpServer.listen(6000, () => {
    console.log('TCP server listening on port 6000');
});

udpServer.bind(5000, () => {
    console.log('UDP server listening on port 5000');
});
