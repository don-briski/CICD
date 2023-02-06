import React from 'react'
import Social from '../Home/Social'
import './Footer.css'
import sprout from '../../assets/sprout-removebg-preview.png'

const Footer = () => {
  return (
    <footer>
      <div className='foot-content' > 
        <div className='sprout'>
        <li>
        <small>ABDULLAHI</small>
        <h1>Portfolio</h1>
        </li>

        <li>
          <img src={sprout} alt='' />
        </li>
        
        </div>
        <div >
          <ul className='permalinks'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#skill'>Skills</a></li>
            <li><a href='#project'>Projects</a></li>
            <li><a href='#contact'>Contacts</a></li>
          </ul>
        </div>
        <div className='sprout'>
          <Social />

          <li>
          <img src={sprout} alt='' sizes={15} />
        </li>
        </div>
      </div>
      <h4>All Rights Reserved @ 2023abdullahi-portfolio </h4>
    </footer>
  )
}

export default Footer