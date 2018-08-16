import { getTextBlobs } from "src/util/firebaseApi";

export const WRITE_GET_TEXT_BLOBS_SUCCESS = "WRITE_GET_TEXT_BLOBS_SUCCESS";
export const WRITE_GET_TEXT_BLOBS_ERROR = "WRITE_GET_TEXT_BLOBS_ERROR";

/**
 *
 * @param {*} textBlobs
 */
export function writeGetTextBlobsSuccess(textBlobs) {
	return {
		type: WRITE_GET_TEXT_BLOBS_SUCCESS,
		textBlobs: textBlobs
	};
}

/**
 *
 * @param {*} error
 */
export function writeGetTextBlobsError(error) {
	return {
		type: WRITE_GET_TEXT_BLOBS_ERROR,
		error: error
	};
}

/**
 *
 */
export function getHomePageTextBlobs() {
	return function(dispatch) {
		getTextBlobs().then((blobs) => {
			dispatch(writeGetTextBlobsSuccess(blobs));
		});
	};
}
