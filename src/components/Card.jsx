import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = ({ id, name, colors }) => {
  return (
    <NavLink to={'/item/' + id + '/0'}>
      <div className="card">
        <div className="card__img">
          <img src={colors[0].images[0]} alt="" />
        </div>
        <div className="card__content">
          <div className="card__title">{name}</div>
          <div className="card__subtitle">Цена: {colors[0].price}</div>
        </div>
      </div>
    </NavLink>
  );
};


