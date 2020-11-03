import React, { useState, useEffect } from 'react';
import ContactIcons from './ContactIcons';
import logo from '../../images/globuzzer_logo.png';
import { CURRENT_YEAR } from '../.././config';
import './Footer.css';

const FooterContact = () => {

  return (
    <div className="footer-contact">
      <div className="contact-container">
        <div className="link-column">
          <img src={logo} alt="" />
          <div className="footer-addresse">
            <a href="https://globuzzer.com/#section_newcity">Skyttevägen 29, Saltsjöbaden, Sweden</a>
            <a href="https://globuzzer.com/#section_newcity">+46 73 555 5 134</a>
            <a href="https://globuzzer.com/#section_newcity">info@globuzzer.com</a>
          </div>
        </div>
        <div className="link-column">
          <a href="https://globuzzer.com/#section_newcity">Destination</a>
          <a href="https://globuzzer.com/#featured_articles">Articles</a>
          <a href="https://globuzzer.com/#aux_services">Services</a>
        </div>
        <div className="link-column">
          <a href="https://www.mightynetworks.com/terms-of-use">Terms & Conditions</a>
          <a href="https://www.mightynetworks.com/privacy-policy">Privacy Policy</a>
        </div>
        <div className="icon-column">
          <p className="follow-us">FOLLOW US</p>
          <ContactIcons />
          <div className="footer-copyright">© { CURRENT_YEAR } Globuzzer. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
