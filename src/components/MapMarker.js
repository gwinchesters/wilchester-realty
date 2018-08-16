import React, { Component } from "react";
import PropTypes from "prop-types";
import { Marker } from "react-google-maps";

class MapMarker extends Component {
	constructor(props) {
		super(props);

		this.marker = null;
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {}

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
	property: PropTypes.object
};

export default MapMarker;
