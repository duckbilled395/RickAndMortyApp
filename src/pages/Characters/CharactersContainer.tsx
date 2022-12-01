import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useActions, useAppSelector } from "../../shared/hooks/hooks";
import { getAuthData, getCharacters } from "../../shared/store/selectors/selectors";
import Characters from "./Characters";

const CharactersContainer: React.FC = () => {

  const { requestCharacters } = useActions()
  const auth = useAppSelector(state => getAuthData(state))
  const characters = useAppSelector(state => getCharacters(state))
console.log(characters)
  useEffect(() => {
    requestCharacters()
  }, [])

  if (!auth.email) {      // Redirecting to a login form
    return <Navigate to='/login'/>
  }

  return <Characters characters={characters}/>
};

export default CharactersContainer;