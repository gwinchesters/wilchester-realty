/* External Dependencies */
import React from "react";
import PropTypes from "prop-types";

/**
 * Stateless Input component
 * @param {Object} input Input props
 * @param {string} inputType Type of input
 */
const Input = ({ input, inputType = "text", placeholder }) => {
	return (
		<input
			className="input"
			type={inputType}
			placeholder={placeholder}
			{...input}
		/>
	);
};

Input.propTypes = {
	input: PropTypes.object,
	inputType: PropTypes.string
};

export default Input;
