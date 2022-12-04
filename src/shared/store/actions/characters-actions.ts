import {
  charactersActionType,
  CharactersPageReducerActionTypes, ICharacterResults,
  ICharacters,
  SetCharactersActionType, SetSingleCharactersActionType
} from "../types/charatersType";
import { Dispatch } from "redux";
import { charactersAPI } from "../../api";

export const setCharacters = (characters: ICharacters): SetCharactersActionType => ({
  type: charactersActionType.SET_CHARACTER,
  payload: characters
});

export const setSingleCharacter = (character: ICharacterResults): SetSingleCharactersActionType => ({
  type: charactersActionType.SET_SINGLE_CHARACTER,
  payload: character
});

export const requestCharacters = (link?: string | undefined) => {
  return async (dispatch: Dispatch<CharactersPageReducerActionTypes>) => {
    let characters = await charactersAPI.getCharacters(link);
    dispatch(setCharacters(characters));
  };
};

export const requestSingleCharacter = (id?: string | undefined) => {
  return async (dispatch: Dispatch<CharactersPageReducerActionTypes>) => {
    let character = await charactersAPI.getSignleCharacter(id);
    dispatch(setSingleCharacter(character));
  };
};