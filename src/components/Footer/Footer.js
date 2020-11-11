import React, { useRef, useContext } from 'react';
// import FooterMap from './FooterMap';
import FooterContact from './FooterContact';
import FooterContactMobile from './FooterContactMobile';
import { AnchorContext } from '../.././contexts/AnchorContext';

const Footer = ({ width }) => {

  return (
    <AnchorContext.Consumer>{(context) => {
      const { footer } = context;
      return (
            <div className="footer-container" ref={footer} >
          {width >= 900 ?
              <FooterContact />
             :
              <FooterContactMobile />
        }
          </div>
       );
    }}</AnchorContext.Consumer>
  );
}

export default Footer;
