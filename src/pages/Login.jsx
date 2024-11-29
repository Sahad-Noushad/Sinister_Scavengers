import React from 'react'
import smoke from '../assets/images/smoke.png'
import scroll from '../assets/images/scroll2.png'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='formpage'>
      <div className="background">
        <img className='smoke' id='smoke' src={smoke} alt="" />
      </div>
        <div className="loginpage" style={{backgroundImage:`url(${scroll})`}}>
            <div className="forms">
                <h1>Face the Unknown</h1>
                <form action="/home">
                    <input type="text" id='soul' placeholder='Soul Id'/>
                    <input type="password" placeholder='password' name="password" id="password" />
                    <button type="submit">Enter</button>
                </form>
                <Link to={'/join'} className='join'>Swear Loyalty to the Unknown?</Link>
            </div>
        </div>
    </div>
  )
}
