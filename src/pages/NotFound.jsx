// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '100px 20px',
      minHeight: '80vh',
      backgroundColor: '#f2f2f2',
    }}>
      <h1 style={{ fontSize: '80px', marginTop: '20px', marginBottom: '10px', color: 'goldenrod' }}>404</h1>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Oops! Page not found</h2>
      <p style={{ fontSize: '16px', marginBottom: '30px' }}>
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        style={{
          background: 'goldenrod',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
