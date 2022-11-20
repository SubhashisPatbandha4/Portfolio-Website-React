import React from 'react'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import "./about.css"
import aboutImage from "../../assets/me.jpg"
const About = () => {
    return (
        <section id='about'>
            <h5>get to know</h5>
            <h2>about me</h2>
            <div className="container about_container">
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
                        <article className="about_card">
                            <FiUsers className="about_icon" />
                            <h5>Clients</h5>
                            <small>200+ WORLDWIDE</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small>80+ projects completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quaerat ratione nihil quisquam recusandae vel, commodi alias iste, placeat rem maiores officia eveniet incidunt iure modi dolorem quos maxime! Ducimus!
                    </p>
                    <a className="btn btn-primary" href="#contact">Lei's TALK</a>
                </div>
            </div>
        </section>
    )
}

export default About
