import * as AuthActionCreators from './auth-actions'
import * as PostsPageActionCreators from './posts-page-actions'
import * as UsersPageActionCreators from './users-page-actions'
import * as CharactersActionCreators from './characters-actions'

export const ActionCreators = {
	...AuthActionCreators,
	...PostsPageActionCreators,
	...UsersPageActionCreators,
	...CharactersActionCreators
}
