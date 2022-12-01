import React from "react";
import { ICharacters } from "../../shared/store/types/charatersType";
import Character from "./Character";

type PropsType = {
  characters: ICharacters
}

const Characters: React.FC<PropsType> = ({characters}) => {

  return (
    <>
      {
        characters?.results?.map(item => <Character id={item.id} image={item.image} gender={item.gender} key={item.id} name={item.name} status={item.status} />)
      }
    </>
  );
};

export default Characters;