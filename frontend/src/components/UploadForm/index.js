import './styles.css'
import React, { useRef } from 'react'
import UploadIcon from '../../assets/images/upload.svg'
import baseUrl from '../../utils/url.js'


const UploadForm = () => {
  const formRef = useRef();

  const uploadFile = async (e) => {
    // submit form if the file input has a file in it indicated by a filepath in value property of the input tag
    if (e.target.value !== '') {
      // put all form data into the FormData object and pass it to the body
      const formData = new FormData()
      // add the file data to formData to be submitted
      formData.append('file', e.target.files[0])

      e.preventDefault();
      const result = await fetch(`${baseUrl}/upload`, {
        method: 'POST',
        mode: 'cors',
        body: formData
      })

      console.log(result)
    }
  }

  return (
    <form ref={formRef} className='upload-form' encType='multipart/form-data' method="POST">
      <div className="upload">
        <label htmlFor="file-upload" className='upload-btn'><img src={UploadIcon} alt="" className='icon btn' /></label>
        <input type="file" id="file-upload" onChange={uploadFile} />
      </div>
    </form>
  )
}

export default UploadForm