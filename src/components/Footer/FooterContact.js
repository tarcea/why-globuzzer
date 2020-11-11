import React from 'react';
import ContactIcons from './ContactIcons';
import logo from '../../images/globuzzer_logo.png';
import { CURRENT_YEAR } from '../.././config';
import style from './FooterDesktop.module.css';

const FooterContact = () => {

  return (
    <div className={style.['footer-contact']}>
      <div className={style.["contact-container"]}>
        <div className={style.["link-column"]}>
          <img src={logo} alt="" />
          <div className={style.["footer-addresse"]}>
            <a href="https://globuzzer.com/#section_newcity">Skyttevägen 29, Saltsjöbaden, Sweden</a>
            <a href="https://globuzzer.com/#section_newcity">+46 73 555 5 134</a>
            <a href="https://globuzzer.com/#section_newcity">info@globuzzer.com</a>
          </div>
        </div>
        <div className={style.["link-column"]}>
        <div></div>
        <div className={style.["column-one"]}>
          <a href="https://globuzzer.com/#section_newcity">Destination</a>
          <a href="https://globuzzer.com/#featured_articles">Articles</a>
          <a href="https://globuzzer.com/#aux_services">Services</a>
        </div>
        </div>
        <div className={style.["link-column"]}>
        <div></div>
        <div className={style.["column-one"]}>
          <a href="https://www.mightynetworks.com/terms-of-use">Terms & Conditions</a>
          <a href="https://www.mightynetworks.com/privacy-policy">Privacy Policy</a>
        </div>
        </div>
        <div className={style.["icon-column"]}>
          <p className={style.["follow-us"]}>FOLLOW US</p>
          <ContactIcons />
          <div className={style.["footer-copyright"]}>© { CURRENT_YEAR } Globuzzer. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
