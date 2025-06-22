import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import roomCss from './Rooms.module.css';
import { roomData } from '../../data/roomData';

const Rooms = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className={`${roomCss.rooms_wrapper} section`} id='room'>
      <div className={roomCss.room_title}>
        <small className='section_heading'>Royal & Luxury</small>
        <h2>Choose Elegant Room</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consequuntur!</p>
      </div>

      <div className={roomCss.room_cards}>
        {roomData.slice(0, visibleCount).map((room) => (
          <Link to={`/rooms/${room.id}`} key={room.id} className={roomCss.room_card}>
            <div className={roomCss.roomImage}>
              <img src={room.image} alt={room.name} />
            </div>
            <div className={roomCss.roomcard_info}>
              <p>{room.bed}</p>
              <h2>{room.name}</h2>
            </div>
            <div className={roomCss.price}>
              {room.price}/Night
            </div>
          </Link>
        ))}
      </div>

      {visibleCount < roomData.length && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={handleLoadMore}
            style={{
              padding: '12px 30px',
              fontSize: '16px',
              backgroundColor: '#9b804e',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Rooms;
