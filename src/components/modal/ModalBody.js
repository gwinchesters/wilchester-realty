/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
/* Internal Dependencies */

/**
 * ModalBody component
 */
class ModalBody extends Component {
	/**
	 * Renders the modal body and any children passed to the component
	 * @returns {JSX}
	 */
	render() {
		const { children } = this.props;
		return <section className="modal-card-body">{children}</section>;
	}
}

ModalBody.propTypes = {
	children: PropTypes.any
};

export default ModalBody;
