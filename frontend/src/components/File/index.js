import React from 'react'
import './styles.css'
import DownloadIcon from '../../assets/images/download.svg'

const File = (props) => {
  const { file } = props
  return (
    <tr className="tr">
      <td className="td">{file.originalName}</td>
      <td>{file.size}</td>
      <td className='download-btn-wrapper'>
        <a href={props.downloadLink}>
          <img src={DownloadIcon} alt="" className="download-btn" />
        </a>
      </td>
    </tr>
  )
}

export default File