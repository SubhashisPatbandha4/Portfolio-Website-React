import React from 'react'
import "./services.css"
import { BiCheck } from "react-icons/bi"
const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>services</h2>
      <div className="container services_container">
        <article className="service">
          <div className='service_head'>

            <h3>UO/UX Designs</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, totam.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

      </div>
    </section>
  )
}

export default Services
