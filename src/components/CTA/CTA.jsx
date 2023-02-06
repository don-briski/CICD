import React from 'react'
import cv from '../../assets/ABDULLAHI tech cv.pdf'
import './CTA.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a className="btn" href={cv} download={true}>Download CV</a>
        <a className="btn btn-primary" href="#contact" > let's Talk</a>
    </div>
  )
}

export default CTA