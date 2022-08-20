import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import os from 'os';
// import FileRoutes from './routes/FileRoutes.js';
import AudioFileRoutes from './routes/AudioFileRoutes.js'
import DocumentFileRoutes from './routes/DocumentFileRoutes.js'
import VideoFileRoutes from './routes/VideoFileRoutes.js'
import fs from 'fs'
import multer from 'multer'

dotenv.config();
const IP = os.networkInterfaces().wlo1[0].address;

const app = express();
// setup cors middleware
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileType = file.mimetype;
    console.log(fileType)
    let pathToSaveFile = ''

    if (fileType.includes("video")) {
      // its a video
      pathToSaveFile = process.env.VIDEO_STORAGE_PATH;
    } else if (fileType.includes("application/octet-stream")) {
      // its audio
      pathToSaveFile = process.env.AUDIO_STORAGE_PATH;
    } else {
      // assume it's some kind of document or code
      pathToSaveFile = process.env.DOCUMENT_STORAGE_PATH;
    }

    cb(null, pathToSaveFile)
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const uploadStorage = multer({ storage })

app.post('/api/v1/upload', uploadStorage.single('file'), (req, res) => {
  // console.log(req.body + "\o")
  res.json({ status: false })
  // res.redirect(`http://${IP}/`)
})

app.use('/api/v1/document', DocumentFileRoutes);
app.use('/api/v1/video', VideoFileRoutes);
app.use('/api/v1/audio', AudioFileRoutes);



app.listen(process.env.PORT, () => {
  console.log(
    `Server is ready! Running on port: ${process.env.PORT}. Server IP: ${IP} `
  );

  const content = `const url = "http://${IP}:${process.env.PORT}/api/v1"\nexport default url`
  fs.writeFileSync("../frontend/src/utils/url.js", content)
});
