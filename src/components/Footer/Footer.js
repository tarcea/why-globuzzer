import React, { useRef, useContext } from 'react';
// import FooterMap from './FooterMap';
import FooterContact from './FooterContact';
import FooterContactMobile from './FooterContactMobile';
import { AnchorContext } from '../.././contexts/AnchorContext';

const Footer = ({ width }) => {
const { footer } = useContext(AnchorContext);
  return (
    <div className="footer-container" ref={footer} >
      {width >= 900 ?
        <FooterContact />
       :
        <FooterContactMobile />
      }
    </div>
  );
}

export default Footer;
