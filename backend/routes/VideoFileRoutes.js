import express from 'express'
import {getVideoFiles} from '../controllers/VideoFiles.js'
const router = express.Router();

router.route('/')
.get(getVideoFiles)

export default router;