import React from 'react';
import Card from './Card';
import { infos } from '../utils/data';

const MenuCards = () => {
  return (
    <div className="tools-menu" id="tools-link">
      {infos.map((info) => (
          <Card icon={info.icon}
                title={info.title}
                body={info.body}
          />
      ))}
    </div>
  );
}

export default MenuCards;
