import {
  charactersActionType,
  CharactersPageReducerActionTypes,
  ICharaters,
  SetCharactersActionType
} from "../types/charatersType";
import { Dispatch } from "redux";
import { charactersAPI } from "../../api";

export const setCharacters = (characters: Array<ICharaters>): SetCharactersActionType => ({
  type: charactersActionType.SET_CHARACTER,
  payload: characters
});

export const requestCharacters = () => {
  return async (dispatch: Dispatch<CharactersPageReducerActionTypes>) => {
    let characters = await charactersAPI.getCharacters();
    dispatch(setCharacters(characters));
  };
};