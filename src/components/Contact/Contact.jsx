import React from 'react'
import contactCss from './../Contact/Contact.module.css'

import element from './../../assets/contact-el.png'

const Contact = () => {
  return (
    <div className={`${contactCss.contact_wrapper} section`} id='contact'>
        <div className={contactCss.reservation}>
            <img src={element} alt="element-contact" />
            <h2>Discover The Hotel of Your Choice</h2>
            <button>Register Now</button>
        </div>
        <div className={contactCss.form}>
            <small className='section_heading'>Reach Us</small>
            <h2>Let's Connect</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero nisi fugit.</p>
            <div className={contactCss.input_container}>
                <div className={contactCss.input_wrapper}>
                    <input type="text" placeholder='Enter First Name :' />
                </div>
                <div className={contactCss.input_wrapper}>
                    <input type="text" placeholder='Enter Last Name :' />
                </div>
            </div>

            <div className={contactCss.input_container}>
                <div className={contactCss.input_wrapper}>
                    <input type="email" placeholder='Enter Email :' />
                </div>
                <div className={contactCss.input_wrapper}>
                    <input type="tel" placeholder='Enter Phone No :' />
                </div>
            </div>
            
            <textarea placeholder='Message :' />
          

            <button>Submit</button>
        </div>
    </div>
  )
}

export default Contact