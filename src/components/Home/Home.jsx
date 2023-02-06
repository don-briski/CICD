import React from 'react'
import Nav from '../Nav/Nav'
import CTA from '../CTA/CTA'
import Social from './Social'
import './Home.css'


const Home = () => {
  return (
    <header >
        <div className="logo">
        <small >ABDULLAHI </small>
        <h1>portfolio</h1>
        </div>
        <Nav />
        <div className='cta-margin'>
        <CTA />
        <Social />
        </div>
    </header>
  )
}

export default Home