import React from 'react';
import Card from './Card';
import { infos } from '../../utils/data';

const MenuCards = () => {
  return (
    <div className="grid-container">
      {infos.map((info) => (
          <Card icon={info.icon}
                title={info.title}
                body={info.body}
                key={info.title}
          />
      ))}
    </div>
  );
}

export default MenuCards;
