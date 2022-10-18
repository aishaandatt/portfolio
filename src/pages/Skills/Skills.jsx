import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './Skills.scss'
const Skills = () => {
  return (
    <div className='Skills' id='Skills'>
      <h1>SKILLS</h1>
      <div className='gifs'>
        <div className='design_elem'>
            <img className='design_gif' src='assets/design_gif.gif' alt=''/>
            <div className='design_text'>
              <div className='text_single'>
              <h2>UI/UX</h2>
              <ProgressBar
                  completed={80}
                  className="wrapper"
                  barContainerClassName="container"
                  completedClassName="barCompleted"
                  labelClassName="label"
                  animateOnRender
                  initCompletedOnAnimation='0'
                  transitionTimingFunction="linear"
                  transitionDuration='2s'
                />
              </div>
              <div className='text_single2'>
                <h2>Video Editing</h2>
                <ProgressBar
                  completed={65}
                  className="wrapper"
                  barContainerClassName="container"
                  completedClassName="barCompleted"
                  labelClassName="label"
                  animateOnRender
                  transitionDuration='2s'
                  initCompletedOnAnimation={0}
                  transitionTimingFunction="linear"
                />
              </div>
              <div className='text_single3'>
              <h2>Adobe Suite</h2>
              <ProgressBar
                  completed={70}
                  className="wrapper"
                  barContainerClassName="container"
                  completedClassName="barCompleted"
                  labelClassName="label"
                  animateOnRender
                  transitionDuration='2s'
                  initCompletedOnAnimation='0'
                  transitionTimingFunction="linear"
                />
              </div>
            </div>
        </div>
        <div className="dev_elem">
          <img className='dev_gif' src='assets/Dev_gif.gif' alt=''/>
          <div className='dev_text'>
            <div className='dtext1'>
            <h2>Web Development</h2>
            <ProgressBar
                completed={70}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
                animateOnRender
                transitionDuration='2s'
                initCompletedOnAnimation='0'
                transitionTimingFunction="linear"
              />
            </div>
            <div className='dtext2'>
            <h2>AI/ML</h2>
            <ProgressBar
                completed={84}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
                animateOnRender
                transitionDuration='2s'
                initCompletedOnAnimation='0'
                transitionTimingFunction="linear"
              />
            </div>
            <div className='dtext3'>
            <h2>Data Structures</h2>
            <ProgressBar
                completed={90}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
                animateOnRender
                transitionDuration='2s'
                initCompletedOnAnimation='0'
                transitionTimingFunction="linear"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Skills