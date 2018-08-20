import React, { Component } from "react";
import PropTypes from "prop-types";

import AddPropertyContainer from "src/containers/AddPropertyContainer";
import EditPropertyContainer from "src/containers/EditPropertyContainer";
import ViewPropertyContainer from "src/containers/ViewPropertyContainer";
import DeletePropertyContainer from "src/containers/DeletePropertyContainer";

export const MODAL_TYPE_ADD_PROPERTY = "MODAL_TYPE_ADD_PROPERTY";
export const MODAL_TYPE_EDIT_PROPERTY = "MODAL_TYPE_EDIT_PROPERTY";
export const MODAL_TYPE_VIEW_PROPERTY = "MODAL_TYPE_VIEW_PROPERTY";
export const MODAL_TYPE_DELETE_PROPERTY = "MODAL_TYPE_DELETE_PROPERTY";

const containers = {
	[MODAL_TYPE_ADD_PROPERTY]: AddPropertyContainer,
	[MODAL_TYPE_EDIT_PROPERTY]: EditPropertyContainer,
	[MODAL_TYPE_VIEW_PROPERTY]: ViewPropertyContainer,
	[MODAL_TYPE_DELETE_PROPERTY]: DeletePropertyContainer
};

/**
 * Modal component
 */
class Modal extends Component {
	/**
	 * React lifecylce method
	 *
	 * @param {Object} nextProps Next properties passed to the component
	 * @returns {boolean}
	 */
	shouldComponentUpdate(nextProps) {
		const currentProps = this.props;

		if (currentProps.isActive !== nextProps.isActive) {
			return true;
		}
		return false;
	}

	/**
	 * Renders the Modal component
	 * @returns {JSX}
	 */
	render() {
		const { isActive, modalType, dispatch } = this.props;
		const Container = containers[modalType];
		const active = isActive ? "is-active" : "";

		return modalType ? (
			<div className={"modal " + active}>
				<div className="modal-background" />
				<div className="modal-card">
					<Container modalType={modalType} dispatch={dispatch} />
				</div>
			</div>
		) : null;
	}
}

Modal.propTypes = {
	isActive: PropTypes.bool.isRequired,
	modalType: PropTypes.string,
	dispatch: PropTypes.func
};

export default Modal;
