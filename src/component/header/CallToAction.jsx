import React from 'react'
import CV from "../../assets/resume.pdf"
const CallToAction = () => {
    return (
        <div className="CallToAction">
            <a href={CV} download>Download CV</a>
            <a href="#contact">Contact Us</a>
        </div>
    )
}

export default CallToAction
