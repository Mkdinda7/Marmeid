import React from 'react'
import testyCss from './../Testimonials/Testimonial.module.css'

import user1 from './../../assets/home-testimonial-1.jpg'
import user2 from './../../assets/home-testimonial-2.jpg'
import user3 from './../../assets/home-testimonial-3.jpg'

import { Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Testimonial = () => {
  return (
    <div className={`${testyCss.testy_wrapper} section`} id='testimony'>
            <div className={testyCss.testy_title}>
                <small className='section_heading'>Testimonial</small>
                <h2>Happy Customer Thoughts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus esse voluptas consectetur nisi illum!</p>
            </div>

            <div className={testyCss.testy_container}>
            <Swiper
                slidesPerView={2}
                spaceBetween={0}
                loop={true}
                speed={1500}
                autoplay={{
                    delay : 1000
                }}
                modules={[Autoplay]}
                breakpoints={{
                    0 :{
                        slidesPerView : 1
                    },
                    850:{
                        slidesPerView : 2
                    },
                }}
            >
                <SwiperSlide>
                <div className={testyCss.card}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi ullam eligendi fugit est nobis?</p>

                        <div className={testyCss.profile}>
                            <img src={user1} alt="user-image" />
                            <h2>Jenis ParkerMan <span>Teacher</span></h2>

                            <i className='ri-double-quotes-l'></i>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testyCss.card}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi ullam eligendi fugit est nobis?</p>

                        <div className={testyCss.profile}>
                            <img src={user2} alt="user-image" />
                            <h2>Lawerence<span>Teacher</span></h2>

                            <i className='ri-double-quotes-l'></i>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={testyCss.card}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi ullam eligendi fugit est nobis?</p>

                        <div className={testyCss.profile}>
                            <img src={user3} alt="user-image" />
                            <h2>Victoria <span>Lawer</span></h2>

                            <i className='ri-double-quotes-l'></i>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
    </div>
  )
}


export default Testimonial;