import React from 'react'
import reaper from '../assets/images/reaper.png'
import smoke from '../assets/images/smoke.png'
import smokeaudio from '../assets/audio/smoke.mp3'

export default function Index() {
    function redirect() {
        var smoke = document.getElementById('smoke')
        var reaper = document.getElementById('reaper')
        var text = document.getElementById('text')
        var logo = document.getElementById('logo')
        smoke.style.transitionDuration='.5s'
        text.style.transitionDuration='.5s'
        reaper.style.transitionDuration='.5s'
        logo.style.transitionDuration='.5s'
        smoke.style.opacity='0';
        text.style.opacity='0';
        setTimeout(()=>{

            reaper.style.width='100px'
            reaper.style.top='0'
            reaper.style.left='0'
            logo.style.color='red'
            logo.style.fontSize='30px'
            logo.style.position='absolute'
            logo.style.top='20px'
            logo.style.left='80px'
        },500)
        setTimeout(()=>{
            window.location.href='/home'
        },1500)
        
    }
  return (
    <div className='index'>
        <div className="background">
            <img className='smoke' id='smoke' src={smoke} alt="" />
            <img className='reaper' id='reaper' src={reaper} alt="" />
        </div>
        <div className="intro" id='intro'>
            <h2 id='text'>Welcome to</h2>
            <h1 id='logo' onClick={redirect}>Sinister Scavengers</h1>
        </div>
    </div>
  )
}
