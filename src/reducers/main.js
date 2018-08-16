import Immutable from "immutable";

import { WRITE_GET_TEXT_BLOBS_SUCCESS } from "src/actions/main";

const initialState = Immutable.fromJS({
	textBlobs: Immutable.fromJS({})
});

/**
 *
 * @param {*} state
 * @param {*} action
 */
function mainReducer(state = initialState, action) {
	switch (action.type) {
		case WRITE_GET_TEXT_BLOBS_SUCCESS:
			return state.withMutations((newState) => {
				newState.set("textBlobs", Immutable.fromJS(action.textBlobs));
			});
		default:
			return state;
	}
}

export default mainReducer;
