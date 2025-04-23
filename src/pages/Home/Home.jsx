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
          <p>Developer Associate at <a href='https://www.sap.com/india/about/labs-india.html' target='_blank' rel="noopener noreferrer"><strong>SAP Labs</strong></a></p>
        </div>
        <div className='desc'>
          <p>I’m B.Tech Graduate in Computer Science from VIT, Vellore.
            My skills are primarily in Artificial intelligence and Web Development. 
            I’m also very good at Sports.</p>
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
