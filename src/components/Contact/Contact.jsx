import emailjs from 'emailjs-com'
import {FaLinkedin} from 'react-icons/fa'
import {MdAttachEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaWpforms} from 'react-icons/fa'
import './Contact.css'
import React, { useRef } from 'react';
import dotenv from 'dotenv';
dotenv.config()




const Contact = () => {
      
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_21jwdkf', 'template_1gq14vr', form.current, 'uLTAmT23kHa3tbMJp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };

  return (
    <section id='contact' className='section-container'>
         <h1>Lets Connect</h1>
         
         <div className='contact-container'>
            <div className='article-container'>
                <article className='article-item'>
                <MdAttachEmail size={35} color='orange'/>
          <h4>Email</h4>
          <h5>abdullahiemoabino2@gmail.com</h5>
          <a href='mailto:abdullahiemoabino2@gmail.com'>send a message</a>
                </article>
                <article className='article-item'>
                <FaLinkedin size={35}  color='orange'/>
          <h4>Linkedin</h4>
          <h5>Abdullahi Aliyu Abdullahi</h5>
          <a href='https://www.linkedin.com/in/abdullahi-aliyu-7856a7186/'>send a message</a>
                </article>
                <article className='article-item'>
                <BsWhatsapp size={35} color='orange'/>
          <h4>Whatspp</h4>
          <h5>Abdullahi Aliyu</h5>
          <a href='https://api.whatsapp.com/send?phone=+2347058513238'>send a message</a>
                </article>
            </div>

            <div >
            <form ref={form} onSubmit={sendEmail}>
        <div className='article-container1'>
        <FaWpforms size={80} color='orange' />
        </div>
        <div >
        <input type='text' name='name' placeholder=' Enter Your Full Name' required/>
        </div>
        <div>
        <input type='email' name='email' placeholder=' Enter Your Email' required/>
        </div>
        <div>
        <textarea type='textarea' name='message' row='20' col= '40' placeholder=' Enter Your message' required/>
        </div>
        <div>
        <button type='submit' className='btn' id='btn-contact'>Send Message</button>
        </div>
         
        </form>
            </div>
         </div>
         
    </section>
  )
}

export default Contact