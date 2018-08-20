import Immutable from "immutable";

import {
	WRITE_UPDATE_SELECTED_PROPERTY,
	WRITE_SET_PROPERTIES,
	WRITE_ADD_UPDATE_PROPERTY,
	WRITE_DELETE_PROPERTY
} from "src/actions/properties";

const initialState = Immutable.fromJS({
	properties: Immutable.fromJS({}),
	selectedProperty: null
});

/**
 *
 * @param {*} state
 * @param {*} action
 */
function propertiesReducer(state = initialState, action) {
	switch (action.type) {
		case WRITE_SET_PROPERTIES:
			return state.withMutations((newState) => {
				const propertiesList = {};

				action.properties.forEach((property) => {
					propertiesList[property.id] = property;
				});

				newState.set("properties", Immutable.fromJS(propertiesList));
			});
		case WRITE_ADD_UPDATE_PROPERTY:
			return state.withMutations((newState) => {
				const propertiesList = state.get("properties").toJS();
				propertiesList[action.id] = action.data;
				newState.set("properties", Immutable.fromJS(propertiesList));
			});
		case WRITE_UPDATE_SELECTED_PROPERTY:
			return state.withMutations((newState) => {
				const propertiesList = state.get("properties").toJS();
				let selectedProp = null;

				if (action.id) {
					selectedProp = Immutable.fromJS(propertiesList[action.id]);
				}

				newState.set(
					"selectedProperty",
					Immutable.fromJS(selectedProp)
				);
			});
		case WRITE_DELETE_PROPERTY:
			return state.withMutations((newState) => {
				const propertiesList = state.get("properties").toJS();

				delete propertiesList[action.id];

				newState.set("properties", Immutable.fromJS(propertiesList));
			});
		default:
			return state;
	}
}

export default propertiesReducer;
