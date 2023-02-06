import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './Skills.css'

const skills = () => {
  return (
    <section className='section-container' id='skills'>
    <div className='header'>
    <small>check out my </small>
        <h1>Skills</h1> 
    </div>
       
        <div className='container-skills'>
            <div className='row'>
                <h2 className='skill-heading'>Frontend Technologies </h2>
                <div className='skill-items'>
                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>React Js</h4>
                            <small> Intermediate</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Javascript Js</h4>
                            <small> Expert</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Angular Js</h4>
                            <small> Intermediate</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4> Html</h4>
                            <small> Expert</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>css</h4>
                            <small> Expert</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Tail Wind</h4>
                            <small> Biginner</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='row'>
            <h2 className='skill-heading'>Backend Technologies </h2>
                <div className='skill-items'>
                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Node Js</h4>
                            <small> Expert</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Express Js</h4>
                            <small> expert</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4> Docker</h4>
                            <small> intermeidate</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Swagger</h4>
                            <small> Expert</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Typescript</h4>
                            <small> Biginner</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>postgress</h4>
                            <small> </small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Mysql</h4>
                            <small> </small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Mongo Db</h4>
                            <small> </small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='row'>
            <h2 className='skill-heading'>Methodologies </h2>
                <div className='skill-items'>
                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Unit Testing</h4>
                            <small> Intermediate</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4>Git & Gi-tHub</h4>
                            <small> expert</small>
                        </div>
                    </article>

                    <article>
                    <BsPatchCheckFill size={30} />
                        <div>
                            <h4> Agile & scrum</h4>
                            <small> intermeidate</small>
                        </div>
                    </article>


            
            </div>
            </div>
            </div>
    </section>
  )
}

export default skills