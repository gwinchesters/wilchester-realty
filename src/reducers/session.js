import Immutable from "immutable";

import { WRITE_LOGIN_SUCCESS } from "src/actions/session";

const sess = window.sessionStorage;

const initialState = Immutable.fromJS({
	isAdmin: sess.getItem("isAdmin") ? sess.getItem("isAdmin") : false
});
/**
 *
 *
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns
 */
function sessionReducer(state = initialState, action) {
	switch (action.type) {
		case WRITE_LOGIN_SUCCESS:
			return state.withMutations((newState) => {
				window.sessionStorage.setItem("isAdmin", true);
				newState.set("isAdmin", true);
			});
		default:
			return state;
	}
}

export default sessionReducer;
