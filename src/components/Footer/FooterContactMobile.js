import React, { useState, useEffect } from 'react';
import ContactIcons from './ContactIcons';
import logo from '../../images/globuzzer_logo.png';
import { CURRENT_YEAR } from '../.././config';
import './FooterMobile.css';

const FooterContactMobile = () => {

  return (
    <div className="footer-mobile">
      <div className="mobile-column">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="mobile-address">
          <a href="https://globuzzer.com/#section_newcity">Skyttevägen 29, Saltsjöbaden, Sweden</a>
          <a href="https://globuzzer.com/#section_newcity">+46 73 555 5 134</a>
          <a href="https://globuzzer.com/#section_newcity">info@globuzzer.com</a>
        </div>
      </div>
      <div className="mobile-icons">
        <ContactIcons />
      </div>
      <div className="footer-copyright-mobile">
        <p>© { CURRENT_YEAR } Globuzzer. All rights reserved</p>
      </div>
    </div>
  );
}

export default FooterContactMobile;
