import React, { Component } from "react";
import PropTypes from "prop-types";
import { Marker } from "react-google-maps";

import { updateSelectedProperty } from "src/actions/properties";
import { openModal } from "src/actions/modal";

import { MODAL_TYPE_VIEW_PROPERTY } from "src/components/modal/Modal";

/**
 *
 */
class MapMarker extends Component {
	/**
	 *
	 * @param {*} props
	 */
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	/**
	 *
	 */
	handleClick() {
		const { property, dispatch } = this.props;
		const id = property.get("id");

		dispatch(updateSelectedProperty(id));
		dispatch(openModal(MODAL_TYPE_VIEW_PROPERTY));
	}

	/**
	 *
	 */
	render() {
		const { property } = this.props;

		return (
			<Marker
				position={{
					lat: property.get("lat"),
					lng: property.get("lng")
				}}
				onClick={this.handleClick}
			/>
		);
	}
}

MapMarker.propTypes = {
	property: PropTypes.object,
	dispatch: PropTypes.func
};

export default MapMarker;
