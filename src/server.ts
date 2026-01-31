import { Server } from 'http';
import { app } from './app';
import { ENV } from './config/env';
let server: Server;

const port = ENV.PORT;
const startServer = () => {
  server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();