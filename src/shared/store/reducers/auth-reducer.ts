import { AuthActionTypes, AuthReducerActionTypes, InitialStateType } from '../types/authTypes'

const initialState: InitialStateType = {
	authData: {
		email: '',
		password: '',
		confirmPassword: null,
		rememberMe: false,
		agreements: false,
		error: ''
	}
}

export const authReducer = (state = initialState, action: AuthReducerActionTypes): InitialStateType => {
	switch (action.type) {
		case AuthActionTypes.SET_AUTHDATA:
			return { ...state, authData: action.payload }
		case AuthActionTypes.SET_AUTHDATA_ERROR:
			return { ...state, authData: { ...state.authData, error: action.payload } }
		default:
			return state
	}
}

export default authReducer
