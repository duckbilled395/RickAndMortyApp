import { AppStateType } from '../index'
import { CommentsType, PostsType } from '../types/postsPageTypes'
import { IAuthData } from '../types/authTypes'
import { UsersType } from '../types/usersPageTypes'
import { ICharaters } from "../types/charatersType";

export const getPosts = (state: AppStateType): Array<PostsType> => {
	return state.postsPage.posts
}

export const getAuthData = (state: AppStateType): IAuthData => {
	return state.auth.authData
}

export const getComments = (state: AppStateType): Array<CommentsType> => {
	return state.postsPage.comments
}

export const getUsers = (state: AppStateType): Array<UsersType> => {
	return state.usersPage.users
}

export const getAuthDataError = (state: AppStateType): string | null | undefined => {
	return state.auth.authData.error
}

export const getCharacters = (state: AppStateType): ICharaters[] => {
	return state.characters.characters
}