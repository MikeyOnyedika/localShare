import fs from 'fs'
import path from 'path'

// ignore these folders. don't bother reading their content
const ignoreFolders = ['node_modules', '.git', '$RECYCLE.BIN']

// get all files that end with a particular file extension from a path
function getMatchingFiles(startPath, filter, fileType) {
    const matchingFiles = []

    function _getMatchingFiles(startPath, filter, fileType) {
        if (!fs.existsSync(startPath)) {
            console.log("no dir ", startPath);
            return;
        }

        let content = []

        function shouldIgnoreFolder(currentPath) {
            // only works if it is a folder 
            if (fs.lstatSync(currentPath).isDirectory()) {
                for (let i = 0; i < ignoreFolders.length; i++) {
                    if (currentPath.includes(ignoreFolders[i])) {
                        return true;
                    }
                }
            }
            return false;
        }

        // tries to read the file/directory, if it fails just assume we don't have permission and just pass
        try {
            // check if it's a folder to ignore before trying to read it
            if (shouldIgnoreFolder(startPath)) {
                // console.log(startPath)
                content = []
            } else {
                content = fs.readdirSync(startPath);
            }
        } catch (err) {
            content = []
        }

        // check for matching files inside the directory
        for (let i = 0; i < content.length; i++) {
            const filename = path.join(startPath, content[i]);
            const stat = fs.lstatSync(filename);
            if (stat.isDirectory()) {
                const files = _getMatchingFiles(filename, filter, fileType);      //recurse
                matchingFiles.concat(files)
            } else if (filename.endsWith(filter)) {
                const pathAsArray = filename.split('/')
                const originalName = pathAsArray[pathAsArray.length - 1];
                // calcuate the (approximate) size of the file
                let size = Math.round(stat.size * 9.537e-7);

                if (size < 1) {
                    size = Math.round(stat.size * 0.00097656) + "Kb"
                } else {
                    size += "Mb"
                }

                // construct an object from the file path. This object represents the file
                matchingFiles.push({
                    originalName,
                    path: filename,
                    size,
                    type: fileType
                })
            };
        };
        return matchingFiles;
    };
    return _getMatchingFiles(startPath, filter, fileType)
}


// get all the files from the specified file types
function getFiles(fileTypes) {
    // loop through each element
    // loop through the property/value pair of each object
    // loop through the array of extensions
    // return the files that match each extension of a filetype
    return loopFileTypes(fileTypes)
}

// loops through each file type 
function loopFileTypes(fileTypes) {
    const files = {}

    for (let fileType of fileTypes) {
        // convert each object to an array
        const fileTypeAsArray = Object.entries(fileType)[0]
        const fileTypeName = fileTypeAsArray[0]
        const filesOfType = getFilesForAllExtOfType(fileTypeAsArray[1], fileTypeName)

        // console.log(filesOfType)
        files[fileTypeName] = filesOfType
    }

    return files
}

// return files that match any of the extension types for a particular file type
function getFilesForAllExtOfType(exts, fileType) {
    const files = []

    for (let ext of exts) {
        const matchingFiles = getMatchingFiles('/media', ext, fileType)
        files.push(...matchingFiles)
    }
    return files
}

// const fTypes = [{ audio: ['.mp3'] }, { video: ['.mp4', '.wav'] }, { document: ['.docx', '.doc', '.pdf'] }];
// console.log(getFiles(fTypes))

export default getFiles
