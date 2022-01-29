import React, { useState } from 'react';
import Home from '../../Screens/Home/Home';
import AboutMe from '../Modals/AbouteMe/AboutMe';
import Projects from '../Modals/Projects/Projects';
import './Navigation.css'

function Navigation() {
const [navMenu,setNavMenu]=useState("Home")

  return (
    <div className='navWrappe'>
      <nav>
        <h1>Vincent Vissers</h1>
        <div className='navItemContainer'>
          <ul>
              <li><span onClick={()=>{setNavMenu('AboutMe')}}>About Me</span></li>
              <li><span onClick={()=>{setNavMenu('Projects')}}>projects</span></li>
              <li><span onClick={()=>{setNavMenu('Contact')}}>contact</span></li>
          </ul>
        </div>
      </nav>
      {navMenu === "AboutMe" && <AboutMe setNavMenu={setNavMenu} />}
      {navMenu === "Projects" && <Projects setNavMenu={setNavMenu} />}
      
      
    </div>
  )
}

export default Navigation;
