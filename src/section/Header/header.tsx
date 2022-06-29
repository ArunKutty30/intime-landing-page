import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '../../components/Button/button'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
    <div>
        <h1>INTIME</h1>
    </div>
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/roadmap'>Roadmap</NavLink>
        <NavLink to='/team'>Team</NavLink>
    </div>
    <Button>Launch App</Button>
    </div>
  )
}

export default Header