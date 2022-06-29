import React from 'react'

import Button from '../../components/Button/button'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
    <div>
        <h1>INTIME</h1>
    </div>
    <div>
       <a href='/'>Home</a>
       <a href='#about'>About</a>
       <a href='#roadmap'>Roadmap</a>
       <a href='#team'>Team</a>
    </div>
    <Button style={{fontFamily:'Grind'}}>Launch App</Button>
    </div>
  )
}

export default Header