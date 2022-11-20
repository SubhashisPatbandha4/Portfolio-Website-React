import React from 'react'
import "./portfolio.css"
import PortfolioImg1 from "../../assets/PortfolioImg1.jpg"
import PortfolioImg2 from "../../assets/PortfolioImg2.jpg"
import PortfolioImg3 from "../../assets/PortfolioImg3.jpg"
import PortfolioImg4 from "../../assets/PortfolioImg4.jpg"
import PortfolioImg5 from "../../assets/PortfolioImg5.jpg"
import PortfolioImg6 from "../../assets/PortfolioImg6.jpg"

const data = [{
    id: 1,
    image: PortfolioImg1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
}, {
    id: 2,
    image: PortfolioImg2,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
}, {
    id: 3,
    image: PortfolioImg3,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
}, {
    id: 4,
    image: PortfolioImg4,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
}, {
    id: 5,
    image: PortfolioImg5,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",

}, {
    id: 5,
    image: PortfolioImg6,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
},]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My recent work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio_item'>
                                <div className='portfolio_item_image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item_cta">
                                    <a href={github} className='btn' target="_b">github</a>
                                    <a href={demo} className='btn btn-primary' target="_b">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio
