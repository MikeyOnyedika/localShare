import File from '../models/File.js'
import getAllFilesOnServer from '../utils/prepareFiles.js'


const fileTypes = [{ audio: ['.mp3'] }, { video: ['.mp4', '.wav'] }, { document: ['.docx', '.doc', '.pdf'] }]
const { video, audio, document } = getAllFilesOnServer(fileTypes)

// delete all the documents in the files collection before writing to it
const del = await File.deleteMany({})
// console.log(del)

// write all the files details to the database
const videos = await  File.insertMany(video)
const audios = await File.insertMany(audio)
const documents = await File.insertMany(document)

// get all media and text files
export async function getAllFiles(req, res){
    const files = await File.find({})
    res.json(files)
}

