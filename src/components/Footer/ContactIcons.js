import React from 'react';
import { FaFacebookF, FaTwitter,
         FaPinterestP, FaYoutube,
         FaLinkedinIn, FaInstagram
       } from 'react-icons/fa';
import './styles.css';

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <FaFacebookF className="icon" />
      <FaTwitter className="icon" />
      <FaPinterestP className="icon" />
      <FaYoutube className="icon" />
      <FaLinkedinIn className="icon" />
      <FaInstagram className="icon" />
    </div>
  );
}

export default ContactIcons;
