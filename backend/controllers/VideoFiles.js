import File from '../models/File.js'

export async function getVideoFiles(req, res){
    const files = await File.find({ type: "video" })
    res.json(files)
}