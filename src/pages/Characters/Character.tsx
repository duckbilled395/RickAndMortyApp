import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/character.scss";

type PropsType = {
  id: number
  image: string,
  name: string,
  status: string,
  gender: string
}

const Character: React.FC<PropsType> = ({id, image, name, status, gender}) => {
  return (
    <div className='box'>
      <div className="box__photo">
        <img src={image} alt="avatar" />
      </div>
      <div className='box__description'>
        <div className='box__description_name'>{name}</div>
        <div className='box__description_secondary'>{status}</div>
        <div className='box__description_secondary'>{gender}</div>
        <NavLink  to={'/characters/character' + id}>View full description</NavLink>
      </div>
    </div>
  );
};

export default Character;