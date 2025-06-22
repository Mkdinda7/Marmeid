import React from 'react';
import About from '../components/About/About';
import Booktable from '../components/BookTable/Booktable';
import Testimonial from '../components/Testimonials/Testimonial';
import { Link } from 'react-router-dom';

const AboutRoute = () => {
  return (
    <div className="aboutRoute">
      {/* Breadcrumb / Header Section */}
      <div className="upper-banner" style={{marginTop: "40px"}}>
        <Link to='/'>
          <span className='home-area'>Home</span>
        </Link>
        <span style={{ margin: '0 10px' }}>/</span>
        <h2>About Us</h2>
      </div>

      {/* Page Sections */}
      <About />
      <Booktable />
      <Testimonial />
    </div>
  );
};

export default AboutRoute;
