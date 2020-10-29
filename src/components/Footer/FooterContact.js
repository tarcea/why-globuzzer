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
      {width >= 1312 && (
        <div className="footer-links">
          <div className="link-column">
          <a href="https://globuzzer.com/#section_newcity">Destination</a>
          <a href="https://globuzzer.com/#featured_articles">Articles</a>
          <a href="https://globuzzer.com/#aux_services">Services</a>
          </div>
          <div className="link-column">
          <a href="https://www.mightynetworks.com/terms-of-use">Terms & Conditions</a>
          <a href="https://www.mightynetworks.com/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      )}

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
