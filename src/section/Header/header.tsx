import React ,{useState}from 'react'

import Button from '../../components/Button/button'
import './header.scss'
import Sidebar from './sidebar';
import menu from "../../assets/icons/menu.png";
const Header = () => {
  const[value,setValue]=useState(false);

  return (
    <div className='header'>
    <div>
        <h1>INTIME</h1>
    </div>
    <div className='menu'>
       <a href='/'>Home</a>
       <a href='#about'>About</a>
       <a href='#roadmap'>Roadmap</a>
       <a href='#team'>Team</a>
    </div>

    <Button style={{fontFamily:'Grind'}}>Launch App</Button>
    <div className='nav_menu' onClick={()=> setValue(!value)}>
    <img src={menu} alt='menu' width='30' height='30'></img>
    </div>
    {
      value && <Sidebar setValue={setValue}/>
    }
    </div>
  )
}

export default Header