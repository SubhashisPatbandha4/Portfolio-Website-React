import React from 'react'
import "./header.css"
import CTA from "./CallToAction"
import HeaderSocials from "./HeaderSocials"
import me from "../../assets/me.jpg"
const Header = () => {
  return (
    <header>
      <div className="container header_container" id='home'>
        <h5>I'm </h5>
        <h1>Subhashis Patbandha</h1>
        <h5 className='textLight'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className='scrollDown'>Scroll Down</a>
        <div className="me">
          <img src={me} alt="my pic" />
        </div>



      </div>
    </header>
  )
}

export default Header