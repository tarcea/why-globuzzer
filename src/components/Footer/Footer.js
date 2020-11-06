import React from 'react';
// import FooterMap from './FooterMap';
import FooterContact from './FooterContact';
import FooterContactMobile from './FooterContactMobile';

const Footer = ({ width }) => {

  return (
    <div className="footer-container" id="footer">
    {width >= 900 ? (
        <FooterContact />
      ) :
    <FooterContactMobile />
  }
    </div>
  );
}

export default Footer;
