import React from 'react'

import PostsContainer from './Posts/PostsContainer'
import UsersContainer from './Users/UsersContainer'
import PostWithCommentsContainer from './PostWithComments/PostWithCommentsContainer'
import Login from './Login/Login'
import Characters from "./Characters/Characters";

type PathAndElementsTypes = {
    [key: string] : pathAndElementInterface
}

interface pathAndElementInterface {
    path: string,
    element: React.ReactNode | JSX.Element
}

let pathAndElements: PathAndElementsTypes = {
    default: {
        path: '/',
        element: <PostsContainer/>
    },
    posts: {
        path: '/posts/*',
        element: <PostsContainer/>
    },
    postByUser: {
        path: '/posts/user:userId',
        element: <PostsContainer/>
    },
    postsWithComments: {
        path: '/posts/:postId/comments',
        element: <PostWithCommentsContainer/>
    },
    users: {
        path: '/users/*',
        element: <UsersContainer/>
    },
    login: {
        path: '/login',
        element: <Login/>
    },
    signUp: {
        path: '/signUp',
        element: <Login/>
    },
    characters: {
        path: '/characters',
        element: <Characters />
    }
}

export default pathAndElements