/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
/* Internal Dependencies */
import Label from "src/components/form/Label";

/**
 * FieldRow form component
 */
class FieldRow extends Component {
	/**
	 * Renders the FieldRow component
	 * @returns {JSX}
	 */
	render() {
		const { labelText, children } = this.props;
		return (
			<div className="field is-horizontal">
				<Label labelText={labelText} />
				<div className="field-body">
					<div className="field">{children}</div>
				</div>
			</div>
		);
	}
}

FieldRow.propTypes = {
	children: PropTypes.any.isRequired,
	labelText: PropTypes.string
};

export default FieldRow;
