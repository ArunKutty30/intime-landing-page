import React from 'react'
import {NavLink} from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
    <div>
        <h1>INTIME</h1>
    </div>
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Marketplace</NavLink>
        <NavLink to='about'>About Us</NavLink>
    </div>
    </div>
  )
}

export default Header