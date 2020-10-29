import React, { useState } from 'react';
import ContactIcons from './ContactIcons';
import logo from '../../images/globuzzer_logo.png';
import { CURRENT_YEAR } from '../.././config';

const FooterContact = () => {
  const [width] = useState(window.innerWidth);

  return (
    <div className="footer-contact">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer-address">
        <p>Skyttevägen 29, Saltsjöbaden, Sweden</p>
        <p>+46 73 555 5 134</p>
        <p>info@globuzzer.com</p>
      </div>
      <div className="footer-icons">
      {width >= 1312 && (
        <p className="follow-us">FOLLOW US</p>
      )}
        <ContactIcons />
      </div>
      <div className="footer-copyright">
        <p>© { CURRENT_YEAR } Globuzzer. All rights reserved</p>
      </div>
    </div>
  );
}

export default FooterContact;
