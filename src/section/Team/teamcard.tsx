import React from 'react'
import './teamcard.scss'

interface ITeamCard{
    image:any,
    name:string
}
const TeamCard:React.FC<ITeamCard>= ({image,name}) => {
  return (
    <div className='card'>
        <img src={image} alt='team' width='300' height='300' style={{borderRadius:'10px'}}/>
        <h2>{name}</h2>
    </div>
     

  )
}

export default TeamCard