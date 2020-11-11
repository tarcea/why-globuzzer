import React from 'react';
import ContactIcons from './ContactIcons';
import logo from '../../images/globuzzer_logo.png';
import { CURRENT_YEAR } from '../.././config';
import style from './FooterMobile.module.css';

const FooterContactMobile = () => {

  return (
    <div className={style.["footer-mobile"]}>
      <div className={style.["mobile-column"]}>
        <div className={style.["footer-logo"]}>
          <img src={logo} alt="" />
        </div>
        <div className={style.["mobile-address"]}>
          <a href="https://globuzzer.com/#section_newcity">Skyttevägen 29, Saltsjöbaden, Sweden</a>
          <a href="https://globuzzer.com/#section_newcity">+46 73 555 5 134</a>
          <a href="https://globuzzer.com/#section_newcity">info@globuzzer.com</a>
        </div>
      </div>
      <div className={style.["mobile-icons"]}>
        <ContactIcons />
      </div>
      <div className={style.["footer-copyright-mobile"]}>
        <p>© { CURRENT_YEAR } Globuzzer. All rights reserved</p>
      </div>
    </div>
  );
}

export default FooterContactMobile;
