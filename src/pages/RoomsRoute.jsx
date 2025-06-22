import React from 'react';
import Rooms from '../components/Rooms/Rooms';
import Offer from '../components/Offer/Offer';
import { Link } from 'react-router-dom';

const RoomsRoute = () => {
  return (
    <div className="roomsRoute">
      <div className="upper-banner" style={{ marginTop: '70px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link to='/'><span className='home-area'>Home</span></Link>
        <span>/</span>
        <h2>Our Rooms</h2>
      </div>

      <Rooms />
      <Offer />
    </div>
  );
};

export default RoomsRoute;
