import React from 'react'
import { Route, Routes } from 'react-router-dom'

import pathAndElements from './lib'    // All paths and elements to route.

const RouteComponents: React.FC = () => {

	return <div>
		<Routes>
			<Route path={pathAndElements.default.path} element={pathAndElements.default.element} />
			<Route path={pathAndElements.posts.path} element={pathAndElements.posts.element} />
			<Route path={pathAndElements.postByUser.path} element={pathAndElements.postByUser.element} />
			<Route path={pathAndElements.users.path} element={pathAndElements.users.element} />
			<Route path={pathAndElements.postsWithComments.path} element={pathAndElements.postsWithComments.element} />
			<Route path={pathAndElements.login.path} element={pathAndElements.login.element} />
			<Route path={pathAndElements.signUp.path} element={pathAndElements.signUp.element} />
			<Route path={pathAndElements.characters.path} element={pathAndElements.characters.element} />
		</Routes>
	</div>
}

export default RouteComponents