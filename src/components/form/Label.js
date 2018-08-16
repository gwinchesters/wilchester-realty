/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * Label form component
 */
class Label extends Component {
	/**
	 * Renders the label componet
	 * @returns {JSX}
	 */
	render() {
		const { labelText } = this.props;
		return (
			<div className="field-label is-normal">
				<label className="label">{labelText}</label>
			</div>
		);
	}
}

Label.propTypes = {
	labelText: PropTypes.string.isRequired
};

export default Label;
