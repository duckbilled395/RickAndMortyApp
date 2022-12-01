import { charactersActionType, CharactersPageReducerActionTypes, InitialStateType } from "../types/charatersType";

const initialState: InitialStateType = {
  characters: {
    info: null,
    results: null
  }
}

const charactersReducer = (state = initialState, action: CharactersPageReducerActionTypes): InitialStateType => {
  switch (action.type) {
    case charactersActionType.SET_CHARACTER:
      return { ...state, characters: action.payload }

    default:
      return state
  }
}

export default charactersReducer
