const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let messageHistory = [];

wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.send(JSON.stringify({ type: 'history', data: messageHistory }));

  ws.on('message', (message) => {
    const parsed = JSON.parse(message);
    if (parsed.type === 'message') {
      messageHistory.push(parsed.data);
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'message', data: parsed.data }));
        }
      });
    }
  });

  ws.on('close', () => console.log('Client disconnected'));
});

const PORT = 8080;
server.listen(PORT, () => console.log(`WebSocket server running on port ${PORT}`));

