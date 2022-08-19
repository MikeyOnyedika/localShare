import File from '../models/File.js'

export async function getAudioFiles(req, res){
    const files = await File.find({ type: "audio" })
    res.json(files)
}