import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Social = () => {
  return (
    <div className='icons'> 
     <a href='https://www.linkedin.com/in/abdullahi-aliyu-7856a7186/'><FaLinkedin size={30} fontWeight={500} color={'orange'}/></a>
      <a href='https://www.linkedin.com/in/abdullahi-aliyu-7856a7186/'><FaGit size={30} fontWeight={500} color={'orange'}/></a> 
       <a href='https://www.linkedin.com/in/abdullahi-aliyu-7856a7186/'><FaTwitter size={30} fontWeight={500} color={'orange'}/></a>
    </div>
  )
}

export default Social