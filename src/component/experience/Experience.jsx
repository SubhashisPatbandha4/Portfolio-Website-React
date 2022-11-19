import React from 'react'
import { BsPatchCheck } from "react-icons/bs"
import "./experience.css"
const Experience = () => {
    return (
        <section id='experience'>
            <h5>What skills I have</h5>
            <h2>My experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details '>
                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details '>

                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details '>
                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details '>
                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>BOOTSTRAP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details '>
                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>TAILWIND</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details '>
                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND EXPERIENCE */}
                <div className="experience_backend">
                    <h3>Backend Development</h3>

                    <div className="experience_content">
                        <article className='experience_details '>
                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>NODE</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details '>
                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>MONGODB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details '>
                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details '>
                            <BsPatchCheck className="experience_icon" />
                            <div>
                                <h4>MYSQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                    </div>
                </div >
                {/* END OF BACKEND EXPERIENCE */}
            </div >
        </section >
    )
}

export default Experience