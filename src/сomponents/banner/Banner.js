import React from 'react';
import './banner.css';

const Banner = ({ text }) => {
  return (
    <div className="banner">
      <div className="banner__image"></div>
      <div className="banner__overlay">
        <h1 className="banner__text">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;





