import React from 'react'
import './teamcard.scss'
import insta from '../../assets/icons/insta.png';

interface ITeamCard{
    image:any,
    name:string
}
const TeamCard:React.FC<ITeamCard>= ({image,name}) => {
  return (
    <div className='card' data-aos="flip-left" >
        <img src={image} alt='team' width='300' height='300' style={{borderRadius:'10px'}}/>
        <h2>{name}</h2>
        <img src={insta} alt='insta'></img>
    </div>
     

  )
}

export default TeamCard