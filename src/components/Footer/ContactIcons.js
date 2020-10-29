import React from 'react';
import { FaFacebookF, FaTwitter,
         FaPinterestP, FaPlayCircle,
         FaLinkedinIn, FaInstagram
       } from 'react-icons/fa';
import './Footer.css';

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <a href="https://www.facebook.com/Globuzzer/"
      className="white-square">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com/globuzzer"
      className="white-square">
        <FaTwitter />
      </a>
      <a href="https://www.pinterest.se/globuzzer/"
      className="white-square">
        <FaPinterestP />
      </a>
      <a href="https://www.youtube.com/channel/UC4u8N-QBDMWG6OqzSni8clw"
      className="white-square">
        <FaPlayCircle />
      </a>
      <a href="https://www.linkedin.com/company/globuzzer/"
      className="white-square">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/globuzzer/"
      className="white-square">
        <FaInstagram />
      </a>

    </div>
  );
}

export default ContactIcons;
