import React from 'react';
// import FooterMap from './FooterMap';
import FooterContact from './FooterContact';
import FooterContactMobile from './FooterContactMobile';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({
    query: '(min-device-width: 1824px)' })
  return (
    <div className="footer-container">
    {isDesktopOrLaptop || isBigScreen ? (
        <FooterContact />
      ) :

    (<FooterContactMobile />)
  }
    </div>
  );
}

export default Footer;
