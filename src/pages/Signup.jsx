import React from 'react'
import smoke from '../assets/images/smoke.png'
import scroll from '../assets/images/scroll2.png'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='formpage'>
      <div className="background">
        <img className='smoke' id='smoke' src={smoke} alt="" />
      </div>
    <div className="loginpage" style={{backgroundImage:`url(${scroll})`}}>
        <div className="forms">
            <h1>Offer Your Soul</h1>
            <form action="">
                <input type="text" id='email' placeholder='Email'/>
                <input type="password" placeholder='password' name="password" id="password" />
                <input type="password" placeholder='Confirm password' name="cpassword" id="cpassword" />
                <button type="submit">Enter</button>
            </form>
            <Link to={'/enter'} className='join'>Step Back Into the Shadows?</Link>
        </div>
    </div>
    </div>
  )
}
