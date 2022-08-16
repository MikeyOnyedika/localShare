import initDb from './DatabaseInit.js'
import mongoose from 'mongoose'

await initDb()
const { Schema, model } = mongoose

const fileSchema = new Schema({
    originalName: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const File = model('File', fileSchema)
export default File;