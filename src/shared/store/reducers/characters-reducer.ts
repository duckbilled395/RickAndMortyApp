import {
  charactersActionType,
  CharactersPageReducerActionTypes,
  ICharaters,
  InitialStateType
} from "../types/charatersType";


const initialState: InitialStateType = {
  characters: []
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
