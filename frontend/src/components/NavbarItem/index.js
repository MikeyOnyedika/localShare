import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

const NavbarItem = (props) => {
  
  return (
    <li className='navitem-wrapper'>
      <NavLink  className={ ( { isActive } ) => isActive ? "active navitem" : "navitem"}
      to={props.path} key={props.id}>
        <img src={props.icon} alt="" className='nav-icon' />
        <p className='navitem-name'>{props.name}</p>
      </NavLink>  
    </li>
  )
}

export default NavbarItem