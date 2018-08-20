import "whatwg-fetch";
import {
	getPropertyData,
	addProperty,
	updateProperty,
	deleteProperty
} from "src/util/firebaseApi";

export const WRITE_ADD_UPDATE_PROPERTY = "WRITE_ADD_UPDATE_PROPERTY";
export const WRITE_SET_PROPERTIES = "WRITE_SET_PROPERTIES";
export const WRITE_UPDATE_SELECTED_PROPERTY = "WRITE_UPDATE_SELECTED_PROPERTY";
export const WRITE_DELETE_PROPERTY = "WRITE_DELETE_PROPERTY";

/**
 *
 * @param {*} id
 */
export function updateSelectedProperty(id) {
	return {
		type: WRITE_UPDATE_SELECTED_PROPERTY,
		id: id
	};
}

/**
 *
 * @param {*} properties
 */
export function writeSetProperties(properties) {
	return {
		type: WRITE_SET_PROPERTIES,
		properties: properties
	};
}

/**
 *
 * @param {*} id
 * @param {*} data
 */
export function writeAddUpdateProperty(id, data) {
	return {
		type: WRITE_ADD_UPDATE_PROPERTY,
		id: id,
		data: data
	};
}

/**
 *
 * @param {*} id
 */
export function writeDeleteProperty(id) {
	return {
		type: WRITE_DELETE_PROPERTY,
		id: id
	};
}

/**
 *
 * @param {*} data
 */
export function saveProperty(data) {
	return function(dispatch) {
		addProperty(data).then((id) => {
			dispatch(writeAddUpdateProperty(id, data));
		});
	};
}

/**
 *
 * @param {*} id
 * @param {*} data
 */
export function updatePropertyData(id, data) {
	return function(dispatch) {
		updateProperty(id, data).then(() => {
			dispatch(writeAddUpdateProperty(id, data));
		});
	};
}

/**
 *
 * @param {*} id
 */
export function removeProperty(id) {
	return function(dispatch) {
		deleteProperty(id).then(() => {
			dispatch(writeDeleteProperty(id));
		});
	};
}

/**
 *
 */
export function getProperties() {
	return function(dispatch) {
		getPropertyData().then((properties) => {
			dispatch(writeSetProperties(properties));
		});
	};
}
