/* External Dependencies */
import Immutable from "immutable";
/* Internal Dependencies */
import { WRITE_OPEN_MODAL, WRITE_CLOSE_MODAL } from "src/actions/modal";

const initialState = Immutable.fromJS({
	isActive: false,
	modalType: null
});

/**
 *
 * @param {*} state
 * @param {*} action
 */
function modalReducer(state = initialState, action) {
	switch (action.type) {
		case WRITE_OPEN_MODAL:
			return state.withMutations((newState) => {
				newState
					.set("isActive", true)
					.set("modalType", action.modalType);
			});
		case WRITE_CLOSE_MODAL:
			return state.withMutations((newState) => {
				newState.set("isActive", false).set("modalType", null);
			});
		default:
			return state;
	}
}

export default modalReducer;
