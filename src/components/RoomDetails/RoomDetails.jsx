// src/components/RoomDetails/RoomDetails.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { roomData } from '../../data/roomData';
import roomImages from '../../data/room';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

console.log(room);


  useEffect(() => {
    const foundRoom = roomData.find((r) => r.id === parseInt(id));
    setRoom(foundRoom);
    window.scrollTo(0, 0);
    if (foundRoom) {
      console.log(`Room with ID ${id} found:`, foundRoom);
    } else {
      console.warn(`Room with ID ${id} not found.`);
    }
  }, [id]);

  if (!room) {
    return <div className="section">Room not found.</div>;
  }

  return (
    <>
    
    {/* <div className="upper-banner" style={{marginTop: "40px"}}>
        <Link to='/'><span className='home-area'>Home</span></Link>
        <span style={{ margin: '0 10px' }}>/</span>
        <h2>{room.name} Details</h2>
    </div> */}

    <div className="room-details-wrapper section">
      
      <div className="room-banner" style={{ position: 'relative', marginTop: '50px' }}>
        <img
          src={room.image}
          alt={room.name}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        <div
          className="room-banner-text"
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            color: 'white',
            background: 'rgba(0,0,0,0.5)',
            padding: '10px 20px',
            borderRadius: '8px',
          }}
        >
          <h1>{room.name}</h1>
          <p>
            {room.type} - {room.guests} Guests
          </p>
        </div>
      </div>

      <div
        className="room-info"
        style={{
          padding: '40px 20px',
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          gap: '40px',
          backgroundColor: '#f9f9f9',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          marginTop: '40px',
        }}
      >
        {/* Description */}
        <div className='room-description' style={{width: '50%'}}>
          <h2 style={{ fontSize: '28px', marginBottom: '10px', color: "#9b804e" }}>About This Room</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', }}>{room.description}</p>
        </div>

        {/* Price & Booking */}
        <div className='room-price'
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            width: '40%',
          }}
        >
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Price</h3>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#9b804e' }}>
            {room.price} <span style={{ fontSize: '14px', color: '#888' }}>/ night</span>
          </p>
          <button
            style={{
              marginTop: '15px',
              padding: '10px 24px',
              background: '#9b804e',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            >
            Book Now
          </button>

          {/* Amenities */}
          <div style={{ marginTop: '25px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Amenities</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {room.amenities.map((item, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: '8px',
                    fontSize: '15px',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: '#9b804e' }}>✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="room-gallery" style={{ marginTop: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', color: '#9b804e', marginBottom: '20px' }}>Room Gallery</h2>
        <div className="gallery-images" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {roomImages.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`Room image ${index + 1}`}
              style={{ width: 'calc(33.333% - 10px)', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default RoomDetails;
