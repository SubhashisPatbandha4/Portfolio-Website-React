import React from 'react'
import CV from "../../assets/resume.pdf"
import "./header.css"
const CallToAction = () => {
    return (
        <div className="CallToAction">
            <a className='btn' href={CV} download>Download CV</a>
            <a className='btn btn-primary' href="#contact">Contact Us</a>


        </div>
    )
}

export default CallToAction
