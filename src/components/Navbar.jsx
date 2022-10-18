import React from 'react'
import './Navbar.scss'
import { useState } from 'react'
import Home from '../pages/Home/Home'
import Experience from '../pages/Experience/Experience'
import Project from '../pages/Project/Project'
import Skills from '../pages/Skills/Skills'
const Navbar = () => {
  const [activeNav,setActiveNav] = useState("#")
  return (

  <div className='navbar'>
    <div className="elements">
      <div className='nav'>
        <div className="end">
          <div className="logo">
            <div className="title">
              <a className='item' href="#Home">Aishaan Datt</a>
            </div>
          </div>
        </div>
        <div className="menu">
          <ul className='list'>
          <li>
            <a href={"#Experience"} className={activeNav === 'Experience' ? 'active' : ''} onClick={ () => setActiveNav('Experience') }>Experience</a>
            </li>
          <li>
          <a href={"#Project"} className={activeNav === 'Project' ? 'active' : ''} onClick={ () => setActiveNav('Project') }>Projects</a>
          </li>
          <li>
          <a href={"#Skills"} className={activeNav === 'Skills' ? 'active' : ''} onClick={ () => setActiveNav('Skills') }>Skills</a>
            </li>
          <li>
            <a href="https://drive.google.com/file/d/1uN0jUKn7zF6jnXP2TD8g9vLm4ZjAnMDI/view?usp=sharing" target='_blank'>Resume</a>
            </li>
          <li>
          <a href={"#Contact"} className={activeNav === 'Contact' ? 'active' : ''} onClick={ () => setActiveNav('Contact') }>Contact</a>
            </li>
          </ul>
        </div>
        <div className="right">
            <img className='email' src='assets/email.svg' alt='' style={{"cursor":"pointer"}} onClick={()=>window.open('mailto:aishaandatt2000@gmail.com')}/>
            <img className='linkedin' src='assets/Linkedin.png' alt='' style={{"cursor":"pointer"}} onClick={()=> window.open("https://linkedin.com/in/aishaandatt", "_blank")}/>
              
            <img className='github' src='assets/Github.png' alt='' style={{"cursor":"pointer"}} onClick={()=> window.open("https://github.com/aishaandatt", "_blank")}/>
        </div>
      </div>
      {/* <Routes>
        <Route exact path='/#Experience' element={<Experience/>}/>
      </Routes> */}
    </div>
</div>
  )
}

export default Navbar