/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

/* Internal Dependencies */
import PropertiesGrid from "src/components/PropertiesGrid";
import Button from "src/components/Button";
import { getProperties } from "src/actions/properties";
import { openModal } from "src/actions/modal";
import { MODAL_TYPE_ADD_PROPERTY } from "src/components/modal/Modal";

/**
 *
 */
class ManagePropertiesPage extends Component {
	/**
	 *
	 * @param {*} props
	 */
	constructor(props) {
		super(props);

		props.dispatch(getProperties());
	}

	/**
	 *
	 */
	render() {
		const { properties, dispatch } = this.props;
		const showGrid = properties ? properties.size > 0 : false;
		return (
			<section className="properties-page">
				<div className="container padding-top-md">
					<Button
						text={"Add Property"}
						type="is-primary"
						onClickCallback={() => {
							dispatch(openModal(MODAL_TYPE_ADD_PROPERTY));
						}}
					/>
					{showGrid && (
						<PropertiesGrid
							isAdmin={true}
							properties={properties}
							dispatch={dispatch}
						/>
					)}
				</div>
			</section>
		);
	}
}

ManagePropertiesPage.propTypes = {
	properties: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func.isRequired
};

export default ManagePropertiesPage;
