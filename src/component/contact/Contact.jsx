import React from 'react'
import { useRef } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from "emailjs-com"
import "./contact.css"
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9vpqegh', 'template_jipx1ah', form.current, 'hRNKszpJ1EIVRd2ai')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <section id='contact'>
            <h5>get in touch</h5>
            <h2>contact me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option_icon' />
                        <h4>Email</h4>
                        <h5>su@gmail.com</h5>
                        <a href="mailto:su@gmail.com" target="_">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact_option_icon' />
                        <h4>Whatsapp</h4>
                        <h5>3232356552</h5>
                        <a href="https://api.whatsapp.com/send?phone+912121363326" target="_">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='your full name' required />
                    <input type="email" name="email" placeholder='your email id' required />
                    <textarea name="message" id="" rows="7" placeholder='your message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send a message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact