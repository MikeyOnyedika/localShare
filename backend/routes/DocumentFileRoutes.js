import express from 'express'
import {getDocumentFiles} from '../controllers/DocumentFiles.js'
const router = express.Router();

router.route('/')
.get(getDocumentFiles)

export default router;