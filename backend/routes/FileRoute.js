import express from 'express'
import { getAllFiles } from '../controllers/Files.js'
const router = express.Router()

router.route('/')
.get(getAllFiles)


export default router;