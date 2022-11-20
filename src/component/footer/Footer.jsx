import React from 'react'
import "./footer.css"
import { FiInstagram } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Subhashis</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials ">

        <a href="facebook.com"><FaFacebookF /></a>
        <a href="facebook.com"><FiInstagram /></a>
        <a href="facebook.com"><IoLogoTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small> &copy;   Subhashis Patbandha. All copyrights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
