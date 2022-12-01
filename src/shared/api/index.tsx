import {CommentsType, PostsType} from '../store/types/postsPageTypes'
import {UsersType} from '../store/types/usersPageTypes'
import {IAuthData, ReplyToSendAuthData} from '../store/types/authTypes'
import { ICharacters } from "../store/types/charatersType";

export const postsAPI = {
    getPosts(): Promise<Array<PostsType>> {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response.json()
            })
    },
    getComments(postId: number): Promise<Array<CommentsType>> {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => {
                return response.json()
            })
    }
}

export const usersAPI = {
    async getUsers(): Promise<Array<UsersType>> {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        return await response.json()
    }
}

export const charactersAPI = {
    async getCharacters(page = 1): Promise<ICharacters> {
        let response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        return await response.json()
    }
}

export const authAPI = {
    async sendAuthData(authData: IAuthData): Promise<ReplyToSendAuthData> {
        let response = await fetch('http://localhost:8080/authData', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(authData)
        })
        return await response.json()
    }
}
