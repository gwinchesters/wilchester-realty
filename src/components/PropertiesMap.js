import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

import MapMarker from "src/components/MapMarker";

/**
 *
 */
class PropertiesMap extends Component {
	/**
	 *
	 */
	render() {
		const { properties, dispatch } = this.props;
		const markers = [];

		properties.forEach((property, index) => {
			markers.push(
				<MapMarker
					key={index}
					property={property}
					lat={property.get("lat")}
					lng={property.get("lng")}
					dispatch={dispatch}
				/>
			);
		});

		const center = { lat: 33.5, lng: -81.454145 };
		const zoom = 7;
		return (
			<div style={{ height: "75vh", width: "100%" }}>
				<GoogleMapReact
					defaultCenter={center}
					defaultZoom={zoom}
					bootstrapURLKeys={{
						key: "AIzaSyBbf7WAdOD2-0q0KFDmwLxuXemKQObvG2U"
					}}
					hoverDistance={30 / 2}
				>
					{markers}
				</GoogleMapReact>
			</div>
		);
	}
}

PropertiesMap.propTypes = {
	properties: PropTypes.object,
	dispatch: PropTypes.func
};

export default PropertiesMap;
