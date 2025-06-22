import React from 'react'
import footerCss from './../Footer/Footer.module.css';

const Footer = () => {
  return (
    <div className={`${footerCss.footer_wrapper} section`}>
        <div className={footerCss.footer_container}>
        <div className={footerCss.footerLinks}>
            <h3>Reservation</h3>
            <p><a href="#">Reservation</a></p>
            <p><a href="#">Mission & Vision</a></p>
            <p><a href="#">Hotel Facilities</a></p>
            <p><a href="#">News & Blogs</a></p>
            <p><a href="#">Terms & Conditions</a></p>
        </div>
        <div className={footerCss.footerLinks}>
            <h3>Help</h3>
            <p><a href="#">FAQ</a></p>
            <p><a href="#">Careers</a></p>
            <p><a href="#">Website Feedback</a></p>
            <p><a href="#">Service Guarantee</a></p>
        </div>
        <div className={footerCss.footerLinks}>
            <h3>Our Service</h3>
            <p><a href="#">Store Directory</a></p>
            <p><a href="#">Top Hotels</a></p>
            <p><a href="#">Quick Links</a></p>
            <p><a href="#">Insights</a></p>

        </div>
        <div className={footerCss.footerLinks}>
            <h3>About Us</h3>
            <p><a href="#">Company</a></p>
            <p><a href="#">Partners</a></p>
            <p><a href="#">Customers</a></p>
            <p><a href="#">Pricing</a></p>
        </div>
        </div>
        <div className={footerCss.copyright}>
            <p>All Rights Reserved || MKDinda || &copy; Copyrights</p>
        </div>
    </div>
  )
}


export default Footer;