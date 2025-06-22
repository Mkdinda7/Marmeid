import React from 'react'
import staffCss from './../Staffs/Staff.module.css'

import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

import staffImg1 from './../../assets/team-1.jpg'
import staffImg2 from './../../assets/team-2.jpg'
import staffImg3 from './../../assets/team-7.jpg'
import staffImg4 from './../../assets/team-4.jpg'
import staffImg5 from './../../assets/team-5.jpg'
import staffImg6 from './../../assets/team-6.jpg'

const Staff = () => {
  return (
    <div className={`${staffCss.staff_wrapper} section`} id='staff'>
        <div className={staffCss.staff_title}>
            <small className='section_heading'>Precious</small>
            <h2>Meet Our Staff Members</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, consequuntur est cum itaque omnis recusandae!</p>
        </div>

        <div className={staffCss.staff_container}>
            <Swiper
                slidesPerView={3}
                loop={true}
                speed={1500}
                autoplay={
                   { delay : 800,}
                }
                breakpoints={
                    {
                        0: {
                            slidesPerView : 1,
                            spaceBetween : 40
                        },
                        767: {
                            slidesPerView : 2
                        },
                        900: {
                            slidesPerView : 3,
                            spaceBetween : 30
                        }
                    }
                }
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={staffCss.staff_card}>
                        <img src={staffImg1} alt="staff-image" />

                        <div className={staffCss.staff_details}>
                            <h3>Lisa</h3>
                            <p>Lead House Keeper</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={staffCss.staff_card}>
                        <img src={staffImg2} alt="staff-image" />

                        <div className={staffCss.staff_details}>
                            <h3>David</h3>
                            <p>Senior Chef</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={staffCss.staff_card}>
                        <img src={staffImg3} alt="staff-image" />

                        <div className={staffCss.staff_details}>
                            <h3>Johson</h3>
                            <p>server</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={staffCss.staff_card}>
                        <img src={staffImg4} alt="staff-image" />

                        <div className={staffCss.staff_details}>
                            <h3>Sara</h3>
                            <p>House Keeping</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={staffCss.staff_card}>
                        <img src={staffImg5} alt="staff-image" />

                        <div className={staffCss.staff_details}>
                            <h3>Anika</h3>
                            <p>Receptionist</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={staffCss.staff_card}>
                        <img src={staffImg6} alt="staff-image" />

                        <div className={staffCss.staff_details}>
                            <h3>Methews</h3>
                            <p>Supervisor</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Staff;
