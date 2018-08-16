import { connect } from "react-redux";

import Modal from "src/components/modal/Modal";

/**
 * Maps props from the state to the component
 *
 * @param {Object} state Redux store object
 */
function mapStateToProps(state) {
	return {
		isActive: state.modal.get("isActive"),
		modalType: state.modal.get("modalType")
	};
}

export default connect(mapStateToProps)(Modal);
