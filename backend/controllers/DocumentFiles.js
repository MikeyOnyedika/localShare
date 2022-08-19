import File from '../models/File.js'

export async function getDocumentFiles(req, res){
    const files = await File.find({ type: "document" })
    res.json(files)
}