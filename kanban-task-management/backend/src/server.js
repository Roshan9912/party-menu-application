require('dotenv').config();

const http = require('http');
const app = require('./app');
const connectDB = require('./config/database');
const { Server } = require('socket.io');
const registerSocketHandlers = require('./sockets');

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

registerSocketHandlers(io);

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});