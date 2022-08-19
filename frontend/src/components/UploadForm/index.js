import './styles.css'
import React , {useRef} from 'react'
import UploadIcon from '../../assets/images/upload.svg'


const UploadForm = () => {
    const formRef = useRef();

    const uploadFile = (e) => {
      // submit form if the file input has a file in it indicated by a filepath in value property of the input tag
      console.log(e.target.value)
      if (e.target.value !== '') {
        formRef.current.submit();
      }
    }
  return (
    <form ref={formRef} className='upload-form' encType='multipart/form-data' action="/upload" method="POST">
        <div className="upload">
          <label htmlFor="file-upload" className='upload-btn'><img src={UploadIcon} alt="" className='icon btn'/></label>
          <input type="file" id="file-upload" onChange={uploadFile} />
        </div>
      </form>
  )
}

export default UploadForm