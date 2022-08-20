import { Router } from 'express'
const router = new Router()
import { downloadFile } from '../controllers/Files.js'

router.get('/', downloadFile)

export default router