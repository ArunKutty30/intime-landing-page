import React from 'react'
import './team.scss';
import arun from '../../assets/images/arun.jpeg'
import sam from '../../assets/images/samraj.jpg'
import arunram from '../../assets/images/arunram.jpeg'
import TeamCard from './teamcard';
const team=[
    {
        name:'Mr . SamRaj',
        image:sam,
        link:'https://instagram.com/sam.de.zero?igshid=YmMyMTA2M2Y='
    },
    {
        name:'Arunachalam J',
        image:arun,
        link:'https://instagram.com/crypto.psych?igshid=YmMyMTA2M2Y='
    },
  
    {
        name:'Arunachalam N',
        image:arunram,
        link:'https://instagram.com/arunram77770?igshid=YmMyMTA2M2Y='
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
                        <TeamCard name={a.name} image={a.image} key={index.toString()} link={a.link}/>
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