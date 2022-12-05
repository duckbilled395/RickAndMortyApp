import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import authReducer from "./reducers/auth-reducer";
import charactersReducer from "./reducers/characters-reducer";

const reducers = combineReducers({
	auth: authReducer,
	characters: charactersReducer
})

export type AppStateType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
	AppStateType,
	unknown,
	Action<string>>;
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store

// @ts-ignore
window.store = store
