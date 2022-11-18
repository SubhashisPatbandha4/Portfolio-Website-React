import React from 'react'
import CTA from "./CallToAction"
const Header = () => {
  return (
    <header>
      <div className="container.header_container">
        <h5>I'm </h5>
        <h1>Subhashis Patbandha</h1>
        <h5 className='textLight'>Fullstack Developer</h5>
        <CTA/>

      </div>
    </header>
  )
}

export default Header