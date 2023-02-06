import React, {useState, useEffect} from 'react'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import bot from '../../assets/bot.jpeg'
//import { Container, Row, Col } from "react-bootstrap";
import './About.css'


const About = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "FULL STACK DEVELOPER", "NODE JS ENGINEER"];
  const [text, setText] = useState("");
  const period = 1800;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

   

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    
    return () => { clearInterval(ticker)};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])


  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : 
    fullText.substring(0, text.length + 1)
    setText(updatedText)
    
    if (isDeleting) {
        setDelta(prevDelta => prevDelta /2)
    }

    if(!isDeleting && updatedText === fullText) {
        setIsDeleting(true)
        setDelta(period)
    } else if (isDeleting && updatedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum +1)
        setDelta(500)
    }
}
  return (
    <section className="container" id="home">
    <div className="row">
    <div className="tagline">
        <span ><h3>welcome to my Portfolio</h3></span>
        </div>
        <div>
        <h1>
            {`Hi, i am ABdullahi Aliyu,  a `}<br></br> 
            <span className="wrap">.{text}.</span>
          </h1>
        </div>
         <div>
         <p>
            A focused, creative, and problem solving software Engineer with
            proficient skills in backend develpment using: Node.js, typescript
            and front end development with: react.js and Angular
          </p>
          <button className='btn'>Readmore <FaRegArrowAltCircleRight size={30}/></button>
         </div>



    </div>
    <div className="row2">
    <img src={bot} alt="" />
    </div>

    {/* <container>
      <row className='container-content'>
     
        <col className='row1'>
        <div className="tagline">
        <span >welcome to my Portfolio</span>
        </div>
          <h1>
            {`Hi, i am ABdullahi Aliyu, a  `}<br></br> 
            <span className="wrap"> {text}</span>
          </h1>
          <p>
            A focused, creative, and problem solving software Engineer with
            proficient skills in backend develpment using: Node.js, typescript
            and front end development with: react.js and Angular
          </p>
          <button onClick={() => console.log("connect")} className='btn-style'>
            Let's connect
            <FaRegArrowAltCircleRight size={25} className='btn-icon'/>
          </button>
        </col>
        <col  className='row2'>
          <img src={bot} alt="" />
        </col>
      </row>
    </container> */}
  </section>
  )
}

export default About