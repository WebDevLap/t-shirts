import React from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../components/Card';

export const Home = () => {
  const items = useSelector((state) => state.home.items);


  if (items.length < 1) {
    return <div className="">загрузка...</div>;
  }

  return (
    <div className="home">
      <div className="home__container _container">
        <div className="home__cards">
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
