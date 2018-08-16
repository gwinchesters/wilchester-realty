/* External Dependencies */
import React from "react";
import PropTypes from "prop-types";

/**
 * Stateless component that renders the Modal Header
 *
 * @param {String} titleText Title of the modal
 * @param {func} closeCallback Function called when the modal is closed
 */
const ModalHeader = ({ titleText, closeCallback }) => {
	return (
		<header className="modal-card-head">
			<p className="modal-card-title">{titleText}</p>
			<button
				className="delete"
				onClick={() => {
					closeCallback();
				}}
			/>
		</header>
	);
};

ModalHeader.propTypes = {
	titleText: PropTypes.string.isRequired,
	closeCallback: PropTypes.func.isRequired
};

export default ModalHeader;
