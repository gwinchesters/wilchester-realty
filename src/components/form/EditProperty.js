import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import ModalHeader from "src/components/modal/ModalHeader";
import ModalBody from "src/components/modal/ModalBody";
import ModalFooter from "src/components/modal/ModalFooter";
import FieldRow from "src/components/form/FieldRow";
import Button from "src/components/Button";
import Input from "src/components/form/Input";
import { closeModal } from "src/actions/modal";

/**
 *
 *
 * @class EditProperty
 * @extends {Component}
 */
class EditProperty extends Component {
	/**
	 *Creates an instance of EditProperty.
	 * @param {*} props
	 * @memberof EditProperty
	 */
	constructor(props) {
		super(props);

		this.closeModal = this.closeModal.bind(this);
	}

	/**
	 *
	 *
	 * @memberof EditProperty
	 */
	closeModal() {
		this.props.dispatch(closeModal());
	}

	/**
	 *
	 *
	 * @returns
	 * @memberof EditProperty
	 */
	render() {
		const { handleSubmit, title } = this.props;
		const statusValues = ["Open", "Closed", "Sub-Leased"];
		const holders = ["Ahold", "Food Lion", "Ross Property"];
		const statusOptions = statusValues.map((status, key) => {
			return (
				<option key={key} value={status}>
					{status}
				</option>
			);
		});
		const holderOptions = holders.map((holder, key) => {
			return (
				<option key={key} value={holder}>
					{holder}
				</option>
			);
		});

		return (
			<div id="addPropertyContainer">
				<ModalHeader
					titleText={title}
					closeCallback={this.closeModal}
				/>
				<ModalBody>
					<form id="formContainer" onSubmit={handleSubmit}>
						<FieldRow labelText="Holder">
							<span className="select">
								<Field name="holder" component="select">
									{holderOptions}
								</Field>
							</span>
						</FieldRow>
						<FieldRow labelText="Title">
							<Field name="title" component={Input} />
						</FieldRow>
						<FieldRow labelText="Address">
							<Field name="address" component={Input} />
						</FieldRow>
						<FieldRow labelText="City">
							<Field name="city" component={Input} />
						</FieldRow>
						<FieldRow labelText="State">
							<Field name="state" component={Input} />
						</FieldRow>
						<FieldRow labelText="Zip">
							<Field name="zip" component={Input} />
						</FieldRow>
						<FieldRow labelText="Status">
							<span className="select">
								<Field name="status" component="select">
									{statusOptions}
								</Field>
							</span>
						</FieldRow>
						<FieldRow labelText="Comments">
							<Field
								name="comments"
								component="textarea"
								className="textarea"
							/>
						</FieldRow>
					</form>
				</ModalBody>
				<ModalFooter>
					<Button
						text={"Submit"}
						style={"is-success"}
						onClickCallback={handleSubmit}
					/>
					<Button
						text={"Cancel"}
						style={"is-default"}
						onClickCallback={this.closeModal}
					/>
				</ModalFooter>
			</div>
		);
	}
}

EditProperty.propTypes = {
	title: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default reduxForm({
	form: "edit-property",
	enableReinitialize: true
})(EditProperty);
