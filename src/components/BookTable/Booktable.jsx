import React from 'react'
import tableCss from './../BookTable/Booktable.module.css'

import TestyImg from './../../assets/home-1-testimonial-1.jpg'

import cardImg1 from './../../assets/Amenities-image-box-1.png'
import cardImg2 from './../../assets/Amenities-image-box-2.png'

const Booktable = () => {
  return (
    <div className={`${tableCss.booktable_wrapper} section`} id='book'>
        <div className={tableCss.testimonial}>
            <div className={tableCss.testimonial_wrapper}>
                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate inventore perspiciatis vel accusantium voluptatem delectus."</p>

                <div className={tableCss.profile}>
                    <img src={TestyImg} alt="user-image" />

                    <h2>Andriana Jemiala <span>Designer</span></h2>
                </div>
                <i className="ri-double-quotes-l"></i>
            </div>
        </div>
        <div className={tableCss.booktable_container}>
            <small>Let's Enjoy</small>
            <h2>Book Your Table</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perspiciatis veritatis ipsam recusandae illum, voluptatum dolorum unde eius cumque reiciendis.</p>

            <div className={tableCss.cards}>
                <div className={tableCss.card}>
                    <img src={cardImg1} alt="card-image" />

                    <div className={tableCss.card_content}>
                        <h3>Restaurant - 10th Floor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam! Itaque dolorem autem illo veritatis.</p>

                        <a href="#">Book a Table</a>
                    </div>
                </div>
                <div className={tableCss.card}>
                    <img src={cardImg2} alt="card-image" />

                    <div className={tableCss.card_content}>
                        <h3>Restaurant - 11th Floor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam! Itaque dolorem autem illo veritatis.</p>

                        <a href="#">Book a Table</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booktable;