import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import Exp_data from './Exp_data';
import './Experience.scss'
const Experience = () => {

  return (
    <div className='Experience' id='Experience'>
      <h1>EXPERIENCE</h1>
      <div className="cards">
          {Exp_data.map((element)=>{
            return(

              <div className='card' key={element.id}>
            <img src={element.img} alt=''/>
            <div className='card_details'>
              <div className='name'>
                <h3>{element.title}</h3>
                <h4>{element.company}</h4>
                <h5>{element.date}</h5>
              </div>
              <div className='tags'>
                {element.tags.map((tag)=>{
                  return <div className='tag'>{tag}</div>
                  
                })}
              </div>
              <p>{element.desc}</p>
              <a href={element.link} target='_blank' rel="noopener noreferrer">

              <button className='btn'>Learn More</button>
              </a>
            </div>
          </div>
          
          )
        })}
      </div>
    </div>
  )
}

export default Experience