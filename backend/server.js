import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import os from 'os'
import FileRoutes from './routes/FileRoute.js'

dotenv.config()
const IP = os.networkInterfaces().wlo1[0].address

const app = express()
// setup cors middleware
app.use(cors())

app.use('/api/v1/file', FileRoutes)

app.listen(process.env.PORT, () => console.log(`Server is ready! Running on port: ${process.env.PORT}. Server IP: ${IP} `))