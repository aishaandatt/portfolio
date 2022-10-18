import React from 'react'
import Projects_data from './Projects_data'
import './Project.scss'
const Project = () => {
  return (
    <div className='Project' id='Project'>
        <h1>PROJECTS</h1>
        <div className='cards'>
          {Projects_data.map((element)=>{
            return(
              <div className='card' key={element.id}>
                <img className='main_img' src={element.img} alt=''/>
                <div className='text'>
                  <h3>{element.title}</h3>
                  <h4>{element.topic}</h4>
                </div>
                <div className='overlay'>
                  <div className='overlay_elements'>
                    <p>{element.desc}</p>
                    <a href={element.link} target='_blank'>
                      <img className='icon' src={element.icon}/>
                    </a>
                  </div>
                </div>
              </div>

            )
          })}
        </div>
    </div>
  )
}

export default Project