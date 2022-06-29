import React from 'react'
import './team.scss';
import arun from '../../assets/images/arun.jpeg'
import sam from '../../assets/images/samraj.jpg'
import arunram from '../../assets/images/arunram.jpeg'
import TeamCard from './teamcard';
const team=[
    {
        name:'Mr . SamRaj',
        image:sam
    },
    {
        name:'Arunachalam J',
        image:arun
    },
  
    {
        name:'Arunachalam N',
        image:arunram
    }
]
const Team = () => {
  return (
    <div className='team' id='team'>
        <h1>
            MEET OUR TEAM . . .
        </h1>
        <div className='team_container'>

        
        <div className='card_container mt-20 '>
        {
            team.map((a,index) => {
                return(
                    <div style={{display:'grid',alignItems:'center'}}>
                        <TeamCard name={a.name} image={a.image} key={index.toString()} />
                    </div>
                )
            })
        }
        </div>
        </div>
    </div>
  )
}

export default Team