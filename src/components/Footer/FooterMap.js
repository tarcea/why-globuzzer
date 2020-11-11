import React from 'react';
import map from '../../images/globe.png';


const FooterMap = () => {
  return (
    <div className="footer-map">
      <div className="img-map">
        <img src={map} alt="" />
      </div>
      <div className="map-text">
        <h1>Want to have your own section?</h1>
        <p>Start now</p>
      </div>
    </div>
  );
}

export default FooterMap;
