import React, { useEffect } from "react";
import { Navigate, useMatch } from "react-router-dom";

import { useActions, useAppSelector } from "../../shared/store/hooks/hooks";
import { getAuthData, getIsFetching, getSingleCharacter } from "../../shared/store/selectors/selectors";
import Loader from "../../shared/components/Loader/Loader";

import "./CharacterFullDescription.scss";

const CharacterFullDescription: React.FC = () => {
  let id: string | undefined = useMatch("/characters/character/:id")!.params.id;

  const { requestSingleCharacter } = useActions();

  useEffect(() => {
    requestSingleCharacter(id);
  }, []);

  const character = useAppSelector(state => getSingleCharacter(state));
  const auth = useAppSelector(state => getAuthData(state));
  const isFetching = useAppSelector(state => getIsFetching(state));

  if (!auth.email) {return <Navigate to="/login" />}
  return (
    <div className="character">
      {isFetching
        ? <Loader />
        : <>
          <div className="character__img">
            <img src={character.image} alt="avatar" />
          </div>
          <div className="character__info">
            <div className="box__description_name">{character.name}</div>
            <div className="box__description_secondary">Status: {character.status}</div>
            <div className="box__description_secondary">Gender: {character.gender}</div>
            <div className="box__description_secondary">Created: {character.created}</div>
            <div className="box__description_secondary">Location: {character.location.name}</div>
            <div className="box__description_secondary">Race: {character.species}</div>
            <div className="box__description_secondary">Type: {character.type ? character.type : "Not mentioned"}</div>
            <br />
            <div className="box__description_secondary">Episodes API: {character.episode
              .map((item, id) => <div key={id}><a href={item} className="box__description_secondary">{item}</a></div>)}
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default CharacterFullDescription;