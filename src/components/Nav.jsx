import React from 'react'
import reaper from '../assets/images/reaper.png'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div className='nav'>
      <div className="left">
        <img className='logo' src={reaper} />
        <p className='name'>Sinister Scavengers</p>
      </div>
      <div className="right">

        <Link className='login' to={'/enter'}>Dare to Return ?</Link>
      </div>
    </div>
  )
}
