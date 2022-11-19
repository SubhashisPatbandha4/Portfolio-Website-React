import React from 'react'
import {FaAward} from "react-icons/fa"
import "./about.css"
import aboutImage from "../../assets/me.jpg"
const About = () => {
    return (
        <section id='about'>
            <h5>get to lnow</h5>
            <h1>about me</h1>
            <div className="conatiner about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={aboutImage} alt="aboutpic" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small></small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
