import React from 'react';
// import FooterMap from './FooterMap';
import FooterContact from './FooterContact';
import FooterContactMobile from './FooterContactMobile';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 76.5em)'
  });
  const isBigScreen = useMediaQuery({
    query: '(min-device-width: 114em)' });
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)' });

  return (
    <div className="footer-container">
    {console.log(isTabletOrMobile)}
    {!isTabletOrMobile ? (
        <FooterContact />
      ) :
    <FooterContactMobile />
  }
    </div>
  );
}

export default Footer;
