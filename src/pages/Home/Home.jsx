import React from 'react'
import './Home.scss'
const Home = () => {
  return (
    <div className='home' id='Home'>
      <div className='images'>
        <img className='memoji' src='assets/Memoji.png' alt='' />
        <div className='AI'>
          <img className='AI_img' src='assets/AI_Cursor.svg' alt='' />
        </div>
        <div className='UIUX'>
          <img className='UIUX_img' src='assets/UIUX_Cursor.svg' alt='' />
        </div>
        <div className='Web'>
          <img className='Web_img' src='assets/WebDev_Cursor.svg' alt='' />
        </div>
      </div>
      <div className='text'>
        <p className='name'>Hi, I'm Aishaan Datt</p>
        <div className='incoming'>
          <p>Incoming Advance Application Engineer Analyst at <a href='https://www.accenture.com/in-en' target='_blank'><strong>Accenture</strong></a></p>
        </div>
        <div className='desc'>
          <p>I’m a Final Year Student at VIT, Vellore pursuing my
            B.Tech in Computer Science with Spl. in IoT. My skills are primarily in
            Artificial intelligence and Web Development. I’m also very good at Sports.</p>
        </div>
      </div>
      {/* <div className='gif'>
        <a href='#Experience'>
            <img className='gif_img' src='assets/Scroll_Down.gif' alt=''/>
        </a>
      </div> */}
    </div>
  )
}

export default Home