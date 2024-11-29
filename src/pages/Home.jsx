import React from 'react'
import Nav from '../components/Nav'
import Level from '../components/Level'

export default function Home() {
  window.onload=()=>{

    var level = document.getElementById('level1');
    console.log(level);

    var coord = level.getBoundingClientRect();
    console.log(coord);
    
  }
  return (
    <div className='home'>
      <Nav/>
      <div className="levels">
        <div className="level level1" id='level1'><Level level="1"/></div>
        <div className="level level2" id='level2'><Level level="2"/></div>
        <div className="level level3" id='level3'><Level level="3"/></div>
        <div className="level level4" id='level4'><Level level="4"/></div>
        <div className="level level5" id='level5'><Level level="5"/></div>
        <div className="level level6" id='level6'><Level level="6"/></div>
        <div className="level level7" id='level7'><Level level="7"/></div>
        <div className="level level8" id='level8'><Level level="8"/></div>
        <div className="level level9" id='level9'><Level level="9"/></div>
        <div className="level level10" id='level10'><Level level="10"/></div>
      </div>
    </div>
  )
}
