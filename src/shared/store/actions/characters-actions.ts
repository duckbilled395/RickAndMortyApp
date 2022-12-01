import {
  charactersActionType,
  CharactersPageReducerActionTypes,
  ICharacters,
  SetCharactersActionType
} from "../types/charatersType";
import { Dispatch } from "redux";
import { charactersAPI } from "../../api";

export const setCharacters = (characters: ICharacters): SetCharactersActionType => ({
  type: charactersActionType.SET_CHARACTER,
  payload: characters
});

export const requestCharacters = () => {
  return async (dispatch: Dispatch<CharactersPageReducerActionTypes>) => {
    let characters = await charactersAPI.getCharacters();
    dispatch(setCharacters(characters));
  };
};