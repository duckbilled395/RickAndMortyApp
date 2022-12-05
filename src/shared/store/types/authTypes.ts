export enum AuthActionTypes {       // Types of action.type
	SET_AUTHDATA = 'SET_AUTHDATA',
	SET_AUTHDATA_ERROR = 'SET_AUTHDATA_ERROR'
}

export interface IAuthData {     // Type of AuthData object
	email: string | null,
	password: string | null,
	confirmPassword?: string | undefined | null,
	rememberMe?: boolean,
	agreements?: boolean,
	error?: string | undefined | null
}

export interface ReplyToSendAuthData {status?: string | undefined, id?: string | undefined, body?: string | undefined}

export type InitialStateType = {     // Type of initial state of AuthReducer
	authData: IAuthData
}

export interface setAuthDataActionInterface {       // Type of ActionCreator
	type: AuthActionTypes.SET_AUTHDATA,
	payload: IAuthData
}

export interface setAuthDataErrorActionInterface {       // Type of ActionCreator
	type: AuthActionTypes.SET_AUTHDATA_ERROR,
	payload: string | null | undefined
}

export type AuthReducerActionTypes = setAuthDataActionInterface | setAuthDataErrorActionInterface;     // Combine types of ActionCreator of AuthReducer
