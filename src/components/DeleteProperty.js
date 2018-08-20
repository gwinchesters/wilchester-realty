/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

/* Internal Dependencies */
import ModalHeader from "src/components/modal/ModalHeader";
import ModalBody from "src/components/modal/ModalBody";
import ModalFooter from "src/components/modal/ModalFooter";
import { closeModal } from "src/actions/modal";
import Button from "src/components/Button";

/**
 *
 */
class DeleteProperty extends Component {
	/**
	 *
	 * @param {*} props
	 */
	constructor(props) {
		super(props);

		this.closeModal = this.closeModal.bind(this);
	}
	/**
	 *
	 */
	closeModal() {
		this.props.dispatch(closeModal());
	}

	/**
	 *
	 */
	render() {
		const { property, deleteFunction } = this.props;

		const title = property ? property.get("title") : "";
		return (
			<div id="deletePropertyContainer">
				<ModalHeader
					titleText={title}
					closeCallback={this.closeModal}
				/>
				<ModalBody>
					{"Are you sure you want to delete this property?"}
				</ModalBody>
				<ModalFooter>
					<Button
						text={"Delete"}
						type={"is-danger"}
						onClickCallback={deleteFunction}
					/>
					<Button
						text={"Cancel"}
						type={"is-default"}
						onClickCallback={this.closeModal}
					/>
				</ModalFooter>
			</div>
		);
	}
}

DeleteProperty.propTypes = {
	property: PropTypes.instanceOf(Immutable.Map),
	deleteFunction: PropTypes.func
};

export default DeleteProperty;
