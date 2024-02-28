const readline = require('readline');
const WebSocket = require('ws');

const port = process.argv[2];

// WebSocket client
const wsClient = new WebSocket(`ws://localhost:${port}`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

wsClient.on('open', () => {
    console.log('WebSocket connection established');

    const msg = "Enter a message to send via WebSocket: ";

    process.stdout.write(msg);
    rl.on('line', (input) => {
        wsClient.send(input);
        process.stdout.write(msg);
    });
});

wsClient.on('message', (msg) => {
    console.log('WebSocket message received:', msg);
});

['SIGINT', 'SIGTERM', 'SIGQUIT']
  .forEach(signal => process.on(signal, () => {
    console.log('Exiting program. Closing WebSocket connection...');
    wsClient.close();
    process.exit();
  }));