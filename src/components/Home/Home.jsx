import React from 'react'
import homeCss from './../Home/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import sliderImg1 from './../../assets/Herittage-header-1.jpg'
import sliderImg2 from './../../assets/Herittage-header-2.jpg'
import sliderImg3 from './../../assets/Herittage-header-3.jpg'
import ratingImg from './../../assets/rating-image-1.png'


const Home = () => {
  return (
    <div className={homeCss.home_wrapper} id='home'>
        <div className={homeCss.Swiper_Slider_wrapper}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={
                   { delay : 1000,}
                }
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={homeCss.slider_item}>
                        <img src={sliderImg1} alt="header-slider-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={homeCss.slider_item}>
                        <img src={sliderImg2} alt="header-slider-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={homeCss.slider_item}>
                        <img src={sliderImg3} alt="header-slider-image" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <div className={homeCss.home_content}>
            <small>Luxury</small>
            <h1>Find Your Luxury Rooms <br /> & Enjoy Your Vacation</h1>

            <div className={homeCss.rating_container}>
                <img src={ratingImg} alt="rating-image" />
                <span>4.9 Google Rated <br /> Around Globe</span>
            </div>

            <div className={homeCss.Booking_container}>
                <div className={homeCss.input_wrapper}>
                    <label htmlFor="">Check In :- </label>
                    <input type="date"/>
                </div>
                <div className={homeCss.input_wrapper}>
                    <label htmlFor="">Check Out :- </label>
                    <input type="date"/>
                </div>
                <div className={homeCss.input_wrapper}>
                    <label htmlFor="">Adults :- </label>
                    <input type="number"/>
                </div>
                <div className={homeCss.input_wrapper}>
                    <label htmlFor="">Children :- </label>
                    <input type="number"/>
                </div>
                <button>Check It's</button>
            </div>
           
        </div>
    </div>
  )
}

export default Home;