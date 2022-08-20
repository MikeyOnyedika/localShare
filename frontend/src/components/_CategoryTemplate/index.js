import React from 'react'
import './styles.css'
import File from '../File'
import baseUrl from '../../utils/url.js'
import { useState, useEffect } from 'react'
import { useCallback } from 'react'


const _CategoryTemplate = (props) => {
  const [files, setFiles] = useState([])
  const [isLoaded, setIsLoaded] = useState()

  useEffect(() => {
    setIsLoaded(false)
  }, [])

  useEffect(() => {
    async function updateFiles() {

      const fetchFiles = async () => {
        const url = baseUrl + '/' + props.fileType
        console.log(url)
        const _files = await (await fetch(url)).json()
        console.log(_files)

        if (_files.length >= 0) {
          setIsLoaded(true)
        }

        return _files;
      }

      const _files = await fetchFiles();
      setFiles(_files)
    }

    updateFiles()
  }, [])


  return (
    <div className='pageWrapper'>
      <h2 className="categoryTitle">{props.title}</h2>
      <hr />
      <div className="files">
        <table className="table">
          <thead>
            <tr>
              <th className="nameColumn">Name</th>
              <th className="sizeColumn">Size</th>
              <th className="downloadColumn"></th>
            </tr>
          </thead>
          {!isLoaded && "Loading ..."}
          {isLoaded &&
            <tbody>
              {files.map(file => <File file={file} key={file._id} downloadLink={`${baseUrl}/download/${file._id}`} />)}
            </tbody>
          }
        </table>
      </div>
    </div>
  )
}

export default _CategoryTemplate