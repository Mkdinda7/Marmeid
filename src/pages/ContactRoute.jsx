import React from 'react';
import Contact from '../components/Contact/Contact';
import { Link } from 'react-router-dom';

const ContactRoute = () => {
  return (
    <div className="contactRoute">
      {/* Breadcrumb Section */}
      <div className="upper-banner" style={{ marginTop: '70px' }}>
        <Link to='/'><span className='home-area'>Home</span></Link>
        <span style={{ margin: '0 10px' }}>/</span>
        <h2>Contact Us</h2>
      </div>

      {/* Google Map Section */}
      <div className="contact-map" style={{textAlign: 'center' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5545216682003!2d88.35009977398461!3d22.558354533494846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027708b1e1e8d1%3A0x18c2b45a06d7ec1b!2sThe%20Elgin%20Fairlawn%20-%20Kolkata%20-%20Heritage%20Hotel%20(Since%201783)!5e0!3m2!1sen!2sin!4v1750572694834!5m2!1sen!2sin"           width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location on Map"
        ></iframe>
      </div>

      {/* Contact Form or Section */}
      <Contact />
    </div>
  );
};

export default ContactRoute;
