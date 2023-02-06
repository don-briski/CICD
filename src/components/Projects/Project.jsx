import React from 'react'
import project1 from '../../assets/image_processing20230127-29560-1s9yg5x.png'
import './Project.css'

const Project = () => {
  return (
    <section id='project' className='section-container' >
    <span>
    <small>check out my </small>
      <h1>   Projects</h1>
    </span>
      <div className='project-container'>
      <article className='project-items'>
        <div>
          <img src={project1} alt="" />
        </div>
        <h3 className='project-title'> Fashion Eshop</h3>
        <div className='project-links'>
        <a href='https://github.com/don-briski/portfolio'  className='project-link'> Github</a>
        <a href='https://dribbble.com/shots/15414258-A-Cold-Wall-Design-Concept' className='project-link'>Live Demo</a>
        </div>
        
      </article>
      <article></article>
      <article></article>
      </div>
    </section>
  )
}

export default Project