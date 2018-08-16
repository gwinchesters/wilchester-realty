/* External Dependencies */
import React from "react";
import PropTypes from "prop-types";

/**
 * Stateless component for the modal footer
 * @param {Object} children Children passed to the component
 */
const ModalFooter = ({ children }) => {
	return <footer className="modal-card-foot">{children}</footer>;
};

ModalFooter.propTypes = {
	children: PropTypes.any
};

export default ModalFooter;
