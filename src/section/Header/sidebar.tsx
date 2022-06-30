import React from 'react'
import './sidebar.scss';
import close from '../../assets/icons/close.png';

interface ISidebar{
    setValue:React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar:React.FC<ISidebar> = ({setValue}) => {
  return (
    <div>
    
    <div className='sidebar'>
        <div >
        <img src={close} alt='close' width='30' height='30'  onClick={() => setValue(v=>!v)} ></img>
        </div>
       
     
        <a href='/' onClick={() => setValue(v=>!v)}>Home</a>
        <a href='#about' onClick={() => setValue(v=>!v)}>About </a>
        <a href='#roadmap' onClick={() => setValue(v=>!v)}>Roadmap</a>
        <a href='#team' onClick={() => setValue(v=>!v)}>Team</a>

    </div>
    
    </div>
    
  )
}

export default Sidebar