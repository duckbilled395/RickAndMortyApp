import { charactersActionType, CharactersPageReducerActionTypes, InitialStateType } from "../types/charatersType";

const initialState: InitialStateType = {
  characters: {
    info: null,
    results: null
  },
  character: null
}

const charactersReducer = (state = initialState, action: CharactersPageReducerActionTypes): InitialStateType => {
  switch (action.type) {
    case charactersActionType.SET_CHARACTER:
      return { ...state, characters: action.payload }
    case charactersActionType.SET_SINGLE_CHARACTER:
      return { ...state, character: action.payload}
    default:
      return state
  }
}

export default charactersReducer
