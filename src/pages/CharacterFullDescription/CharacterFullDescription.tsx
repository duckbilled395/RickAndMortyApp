import React, { useEffect, useLayoutEffect } from "react";
import { Navigate, useMatch } from "react-router-dom";

import { useActions, useAppSelector } from "../../shared/hooks/hooks";
import { getAuthData, getSingleCharacter } from "../../shared/store/selectors/selectors";

import "./CharacterFullDescription.scss";
import Loader from "../../shared/components/Loader/Loader";

const CharacterFullDescription: React.FC = () => {
  let id: string | undefined = useMatch('/characters/character/:id')!.params.id

  const { requestSingleCharacter } = useActions()

  useLayoutEffect(() => {
    requestSingleCharacter(id)
  }, [])

  const character = useAppSelector(state => getSingleCharacter(state))
  const auth = useAppSelector(state => getAuthData(state))
console.log(character)
  if (!auth.email) {return <Navigate to="/login" />}
  return (
    <div className='character'>
      {/*<div className='character__img'>*/}
      {/*  <img src={character.image} alt="avatar" />*/}
      {/*</div>*/}
      <div className='character__info'>
        {/*<div className='box__description_name'>{character.name}</div>*/}
        <Loader />
        {/*<div className='box__description_secondary'>Status: {status}</div>*/}
        {/*<div className='box__description_secondary'>Gender: {gender}</div>*/}
      </div>
    </div>
  );
};

export default CharacterFullDescription;