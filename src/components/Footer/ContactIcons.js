import React from 'react';
import { FaFacebookF, FaTwitter,
         FaPinterestP, FaYoutube,
         FaLinkedinIn, FaInstagram
       } from 'react-icons/fa';
import './Footer.css';

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <div className="white-square">
        <FaFacebookF />
      </div>
      <div className="white-square">
        <FaTwitter />
      </div>
      <div className="white-square">
        <FaPinterestP />
      </div>
      <div className="white-square">
        <FaYoutube />
      </div>
      <div className="white-square">
        <FaLinkedinIn />
      </div>
      <div className="white-square">
        <FaInstagram />
      </div>
    </div>
  );
}

export default ContactIcons;
