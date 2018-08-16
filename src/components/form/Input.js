/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 *
 *
 * @class Input
 * @extends {Component}
 */
class Input extends Component {
	/**
	 *
	 *
	 * @returns
	 * @memberof Input
	 */
	render() {
		const { input } = this.props;
		return <input className="input" {...input} />;
	}
}

Input.propTypes = {
	input: PropTypes.object
};

export default Input;
