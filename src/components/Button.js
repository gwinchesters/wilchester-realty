/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
/* Internal Dependencies */

/**
 *
 *
 * @class Button
 * @extends {Component}
 */
class Button extends Component {
	/**
	 *
	 *
	 * @returns
	 * @memberof Button
	 */
	render() {
		const { text, type, position, onClickCallback } = this.props;
		const classVal = "button " + type + " " + position;

		return (
			<a
				className={classVal}
				onClick={(event) => {
					if (typeof onClickCallback === "function") {
						event.preventDefault();
						onClickCallback(event);
					}
				}}
			>
				{text}
			</a>
		);
	}
}

Button.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	position: PropTypes.string,
	onClickCallback: PropTypes.any
};

export default Button;
