import React from 'react'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Rooms from '../components/Rooms/Rooms'
import Booktable from '../components/BookTable/Booktable'
import Offer from '../components/Offer/Offer'
import Staff from '../components/Staffs/Staff'
import Testimonial from '../components/Testimonials/Testimonial'
import Contact from '../components/Contact/Contact'

const HomeRoute = () => {
  return (
    <>
      <Home/>
      <About/>
      <Rooms limit={3} />
      <Booktable/>
      <Offer/>
      <Staff/>
      <Testimonial/>
      <Contact/>
    </>
  )
}

export default HomeRoute