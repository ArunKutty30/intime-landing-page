import React from 'react'
import './team.scss';
import arun from '../../assets/images/arun.jpeg'
import TeamCard from './teamcard';
const team=[
    {
        name:'Arunachalam J',
        image:arun
    },
    {
        name:'Mr . SamRaj',
        image:arun
    },
    {
        name:'Arunachalam N',
        image:arun
    }
]
const Team = () => {
  return (
    <div className='team'>
        <h1>
            MEET OUR TEAM . . .
        </h1>
        <div className='card_container mt-20 '>
        {
            team.map((a,index) => {
                return(
                    <div>
                        <TeamCard name={a.name} image={a.image} key={index.toString()}/>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Team