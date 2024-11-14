import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io'
import { connectToMongo } from './DB/DB';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server)

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('User Connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('Server is running with TypeScript');
});

const startServer = async () => {
    await connectToMongo();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  };

  startServer();