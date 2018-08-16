/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Internal Dependencies */
import { updateSelectedProperty, removeProperty } from "src/actions/properties";
import { openModal } from "src/actions/modal";
import { MODAL_TYPE_EDIT_PROPERTY } from "src/components/modal/Modal";

/**
 *
 */
class PropertyCard extends Component {
	/**
	 *
	 * @param {*} props
	 */
	constructor(props) {
		super(props);

		this.editProperty = this.editProperty.bind(this);
		this.removeProperty = this.removeProperty.bind(this);
	}

	/**
	 *
	 */
	editProperty() {
		const { property, dispatch } = this.props;

		dispatch(updateSelectedProperty(property.get("id")));
		dispatch(openModal(MODAL_TYPE_EDIT_PROPERTY));
	}

	/**
	 *
	 */
	removeProperty() {
		const { property, dispatch } = this.props;

		dispatch(removeProperty(property.get("id")));
	}

	/**
	 *
	 */
	render() {
		const { property } = this.props;
		const title = property.get("title");
		let showFooter = false;

		return (
			<div className="card">
				<header className="card-header">
					<p className="card-header-title">{title}</p>
				</header>
				<div className="card-content" />
				{showFooter && (
					<footer className="card-footer">
						<a
							className="card-footer-item"
							onClick={this.editProperty}
						>
							<FontAwesomeIcon icon="edit" />
						</a>
						<a className="card-footer-item">
							<FontAwesomeIcon icon="trash-alt" />
						</a>
					</footer>
				)}
			</div>
		);
	}
}

PropertyCard.propTypes = {
	property: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func
};

export default PropertyCard;
