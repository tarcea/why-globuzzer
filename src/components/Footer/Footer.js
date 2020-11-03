import React, { useState, useEffect } from 'react';
// import FooterMap from './FooterMap';
import FooterContact from './FooterContact';
import FooterContactMobile from './FooterContactMobile';

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="footer-container">
    {width >= 900 ? (
        <FooterContact />
      ) :
    <FooterContactMobile />
  }
    </div>
  );
}

export default Footer;
