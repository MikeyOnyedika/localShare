import express from 'express'
import {getAudioFiles} from '../controllers/AudioFiles.js'
const router = express.Router();

router.route('/')
.get(getAudioFiles)

export default router;