const net = require('net');
const http = require('http');
const dgram = require('dgram');
const WebSocket = require('ws');

// Получаем аргумент из командной строки
const myArgument = process.argv[2];

// TCP client
const tcpClient = new net.Socket();
tcpClient.connect(8080, 'localhost', () => {
    console.log('Connected to TCP server');
    tcpClient.write(myArgument);
});

// HTTP client
const httpOptions = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'GET',
};

const httpRequest = http.request(httpOptions, (res) => {
    console.log('HTTP response received:', res.statusCode);
});

httpRequest.end();

// UDP client
const udpClient = dgram.createSocket('udp4');
udpClient.send(myArgument, 8080, 'localhost', (err) => {
    if (err) throw err;
    console.log('Message sent via UDP');
    udpClient.close();
});

// WebSocket client
const wsClient = new WebSocket('ws://localhost:8080');
wsClient.on('open', () => {
    console.log('WebSocket connection established');
    wsClient.send(myArgument);
});

wsClient.on('message', (msg) => {
    console.log('WebSocket message received:', msg);
});
