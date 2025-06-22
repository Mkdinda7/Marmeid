import React from 'react'
import offerCss from './../Offer/Offer.module.css'

import offerImg1 from './../../assets/tab-1.jpg'
import offerImg2 from './../../assets/tab-2.jpg'
import offerImg3 from './../../assets/tab-3.jpg'

 const Offer = () => {
  return (
    <div className={`${offerCss.offer_wrapper} section`} id='offer'>
        <div className={offerCss.offer_title}>
          <small className='section_heading'>Amentites</small>
          <h2>Know What Amenities Do We Offer</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores voluptatibus facere provident consequuntur eveniet repellendus.</p>
        </div>

        <div className={offerCss.offer_cards}>
          <div className={offerCss.offer_card}>
            <img src={offerImg1} alt="offer-image" />

            <div className={offerCss.offer_details}>
              <span>.01</span>
              <h3>GYM Fitness Center</h3>
            </div>
          </div>
          <div className={offerCss.offer_card}>
            <img src={offerImg2} alt="offer-image" />

            <div className={offerCss.offer_details}>
              <span>.02</span>
              <h3>Steam Shower</h3>
            </div>
          </div>
          <div className={offerCss.offer_card}>
            <img src={offerImg3} alt="offer-image" />

            <div className={offerCss.offer_details}>
              <span>.03</span>
              <h3>Luxury Bed Rooms</h3>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Offer;