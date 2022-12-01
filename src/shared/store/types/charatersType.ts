export enum charactersActionType {
  SET_CHARACTER = 'SET_CHARACTER'
}

export interface ICharacters {
  info: ICharacterInfo | null,
  results: ICharacterResults[] | null,
}

interface ICharacterInfo {
  count: number,
  pages: number,
  next: string,
  prev: string
}

export interface ICharacterResults {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string[],
  created: string
}

export interface SetCharactersActionType {       // Type of ActionCreator
  type: charactersActionType.SET_CHARACTER,
  payload: ICharacters
}

export interface InitialStateType {     // Type of initialState of usersReducer
  characters: ICharacters
}

export type CharactersPageReducerActionTypes = SetCharactersActionType;