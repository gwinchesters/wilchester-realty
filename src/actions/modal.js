export const WRITE_OPEN_MODAL = "WRITE_OPEN_MODAL";
export const WRITE_CLOSE_MODAL = "WRITE_CLOSE_MODAL";

/**
 * Action creator used to open the modal componet
 * @param modalType The type of modal to open
 */
export function openModal(modalType) {
	return {
		type: WRITE_OPEN_MODAL,
		modalType: modalType
	};
}

/**
 * Action creator used to close the modal component
 */
export function closeModal() {
	return {
		type: WRITE_CLOSE_MODAL
	};
}
