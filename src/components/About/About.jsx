import React from 'react';
import aboutCss from './../About/About.module.css'

import aboutImg1 from './../../assets/about-room.png'
import aboutImg2 from './../../assets/bedroom-about.png'
import aboutImg3 from './../../assets/signboard-about.png'
import aboutImg4 from './../../assets/swimming-pool-about.png'

const About = () => {
  return (
    <div className={`${aboutCss.about_wrapper} section`} id='about'>
        <div className={aboutCss.about_content}>
            <small className='section_heading'>About Us</small>
            <h2>Enjoy your Vacation In <span>Our Hotel</span>And Get Lots of Fun
                <span>Happiness and Great Pleaseure.</span></h2> 
            <button>Explore Now</button>
        </div>
        <div className={aboutCss.About_cards}>
            <div className={aboutCss.about_card}>
                <img src={aboutImg1} alt="About-image" />
                <h3>Tasty Cuisnes</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, id.</p>
            </div>
            <div className={aboutCss.about_card}>
                <img src={aboutImg2} alt="About-image" />
                <h3>Fine Double Beds</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, id.</p>
            </div>
            <div className={aboutCss.about_card}>
                <img src={aboutImg3} alt="About-image" />
                <h3>Free Medical Treatment</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, id.</p>
            </div>
            <div className={aboutCss.about_card}>
                <img src={aboutImg4} alt="About-image" />
                <h3>Swimming Pool</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, id.</p>
            </div>
        </div>
    </div>
  )
}

export default About;
