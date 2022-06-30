import React from 'react'
import './teamcard.scss'
import insta from '../../assets/icons/insta.png';

interface ITeamCard{
    image:any,
    name:string,
    link:string
}
const TeamCard:React.FC<ITeamCard>= ({image,name,link}) => {
  return (
    <div className='card' data-aos="flip-left" >
        <img src={image} alt='team' width='300' height='300' style={{borderRadius:'10px'}}/>
        <h2>{name}</h2>
        <a href={link}>
        <img src={insta} alt='insta'></img>
        </a>
    </div>
     

  )
}

export default TeamCard