import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import os from 'os';
import FileRoutes from './routes/FileRoutes.js';
import AudioFileRoutes from './routes/AudioFileRoutes.js'
import DocumentFileRoutes from './routes/DocumentFileRoutes.js'
import VideoFileRoutes from './routes/VideoFileRoutes.js'
import fs from 'fs'

dotenv.config();
const IP = os.networkInterfaces().wlo1[0].address;

const app = express();
// setup cors middleware
app.use(cors());

app.use('/api/v1/file', FileRoutes);
app.use('/api/v1/audio', AudioFileRoutes);
app.use('/api/v1/document', DocumentFileRoutes);
app.use('/api/v1/video', VideoFileRoutes);



app.listen(process.env.PORT, () => {
  console.log(
    `Server is ready! Running on port: ${process.env.PORT}. Server IP: ${IP} `
  );

  const content = `const url = "http://${IP}:${process.env.PORT}/api/v1"\nexport default url`
  fs.writeFileSync("../frontend/src/utils/url.js", content)

});
