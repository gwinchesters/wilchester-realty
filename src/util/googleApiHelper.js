import { GOOGLE_API, GOOGLE_GEOCODING_BASE } from "src/util/constants";

import {
	jsonHandler,
	statusHandler,
	buildRequestObject
} from "src/util/request";

/**
 *
 * @param {*} property
 */
export function buildGeocodingUrl(property) {
	const address = property.address ? property.address : "";
	const city = property.city ? property.city : "";
	const state = property.state ? property.state : "";
	const zip = property.zip ? "+" + property.zip : "";
	const fullAddress = address + "+" + city + "+" + state + zip;
	const formattedAddress = fullAddress.split(" ").join("+");

	return GOOGLE_GEOCODING_BASE + formattedAddress + "&key=" + GOOGLE_API;
}

/**
 *
 */
export function getLatLong(data) {
	const url = buildGeocodingUrl(data);
	const requestObject = buildRequestObject();

	return fetch(url, requestObject)
		.then(statusHandler)
		.then(jsonHandler)
		.then((json) => {
			return json.results[0].geometry.location;
		});
}
