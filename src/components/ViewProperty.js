/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

import ModalHeader from "src/components/modal/ModalHeader";
import ModalBody from "src/components/modal/ModalBody";
import ModalFooter from "src/components/modal/ModalFooter";
import { closeModal } from "src/actions/modal";
import Button from "src/components/Button";
import { updateSelectedProperty } from "src/actions/properties";

/**
 *
 *
 * @class ViewProperty
 * @extends {Component}
 */
class ViewProperty extends Component {
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
		this.props.dispatch(updateSelectedProperty(null));
		this.props.dispatch(closeModal());
	}
	/**
	 *
	 *
	 * @returns
	 * @memberof ViewProperty
	 */
	render() {
		const { property } = this.props;
		const title = property.get("title");
		return (
			<div id="viewPropertyContainer">
				<ModalHeader
					titleText={title}
					closeCallback={this.closeModal}
				/>
				<ModalBody>{"What should the user see here?"}</ModalBody>
				<ModalFooter>
					<Button
						text={"Return to Map"}
						type={"is-success"}
						onClickCallback={this.closeModal}
					/>
				</ModalFooter>
			</div>
		);
	}
}

ViewProperty.propTypes = {
	property: PropTypes.instanceOf(Immutable.Map)
};

export default ViewProperty;
