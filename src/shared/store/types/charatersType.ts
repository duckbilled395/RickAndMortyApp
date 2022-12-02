export enum charactersActionType {
  SET_CHARACTER = 'SET_CHARACTER',
  SET_SINGLE_CHARACTER = 'SET_SINGLE_CHARACTER'
}

export interface ICharacters {
  info: ICharacterInfo | null,
  results: ICharacterResults[] | null,
}

interface ICharacterInfo {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null
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

export interface SetCharactersActionType {
  type: charactersActionType.SET_CHARACTER,
  payload: ICharacters
}

export interface SetSingleCharactersActionType {
  type: charactersActionType.SET_SINGLE_CHARACTER,
  payload: ICharacterResults
}

export interface InitialStateType {
  characters: ICharacters,
  character: ICharacterResults | null
}

export type CharactersPageReducerActionTypes = SetCharactersActionType | SetSingleCharactersActionType;