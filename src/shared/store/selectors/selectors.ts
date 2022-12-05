import { AppStateType } from "../index";
import { ICharacterResults, ICharacters } from "../types/charatersType";
import { IAuthData } from "../types/authTypes";

export const getAuthDataError = (state: AppStateType): string | null | undefined => {
	return state.auth.authData.error
}

export const getAuthData = (state: AppStateType): IAuthData => {
	return state.auth.authData
}

export const getCharacters = (state: AppStateType): ICharacters => {
	return state.characters.characters
}

export const getIsFetching = (state: AppStateType): boolean => {
	return state.characters.isFetching
}

export const getSingleCharacter = (state: AppStateType): ICharacterResults => {
	return <ICharacterResults>state.characters.character
}