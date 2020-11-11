import React from 'react';
import { FaFacebookF, FaTwitter,
         FaPinterestP, FaPlayCircle,
         FaLinkedinIn, FaInstagram
       } from 'react-icons/fa';
import style from './ContactIcons.module.css';

const ContactIcons = () => {
  return (
    <div className={style.["contact-icons"]}>
      <a href="https://www.facebook.com/Globuzzer/"
      className={style.["white-square"]}>
        <FaFacebookF />
      </a>
      <a href="https://twitter.com/globuzzer"
      className={style.["white-square"]}>
        <FaTwitter />
      </a>
      <a href="https://www.pinterest.se/globuzzer/"
      className={style.["white-square"]}>
        <FaPinterestP />
      </a>
      <a href="https://www.youtube.com/channel/UC4u8N-QBDMWG6OqzSni8clw"
      className={style.["white-square"]}>
        <FaPlayCircle />
      </a>
      <a href="https://www.linkedin.com/company/globuzzer/"
      className={style.["white-square"]}>
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/globuzzer/"
      className={style.["white-square"]}>
        <FaInstagram />
      </a>

    </div>
  );
}

export default ContactIcons;
