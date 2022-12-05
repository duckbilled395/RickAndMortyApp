import * as AuthActionCreators from "./auth-actions";
import * as CharactersActionCreators from "./characters-actions";

export const ActionCreators = {
	...AuthActionCreators,
	...CharactersActionCreators
}
