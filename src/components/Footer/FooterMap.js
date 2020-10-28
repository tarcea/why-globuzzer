import React from 'react';
import map from '../../images/globe.png';
import Card from '../WhyGlobuzzer/Card';
import './styles.css';

const FooterMap = () => {
  return (
    <div className="footer-map">
      <Card icon={map}
              title="Want to have your own section?"
              body="Start now"
      />
    </div>
  );
}

export default FooterMap;
