import React from 'react'
import './Nav.css'


const Nav = () => {
  return (
    <nav className='menu'>
        
        <li>
            <a href='#home' className='links'>Home</a>
            </li>
            <li>
            <a href='#skills' className='links'>skills</a>
            </li>
            {/* <li>
            <a href='#experiences' className='links'>Experience</a>
            </li> */}
            <li>
            <a href='#project' className='links'>Projects</a>
            </li>
            <li>
            <a href='#contact' className='links'>Contacts</a>
            </li>
    </nav>
  )
}

export default Nav