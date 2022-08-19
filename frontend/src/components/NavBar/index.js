import React from 'react'
import './styles.css'
import UploadForm from '../UploadForm'

const NavBar = (props) => {
  
  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
        <ul className='navitems'>
          {props.children}
        </ul>
      </nav>

      <UploadForm />
    </div>
  )
}

export default NavBar