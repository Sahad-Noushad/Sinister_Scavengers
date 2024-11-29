import React from 'react'
import tombstone from '../assets/images/tombstone.png'

export default function Level(props) {
  return (
    <div className='levelimg'>
        <div className="over">

        <img src={tombstone} alt="" />   
        <div className="leveltext">
            {props.level}    
        </div> 
        </div>
      <p>Level <span className='num'>{props.level}</span></p>
    </div>
  )
}
