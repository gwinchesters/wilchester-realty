import React, { Component } from "react";
import PropTypes from "prop-types";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapStyle from "src/util/mapStyle.json";

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
					dispatch={dispatch}
				/>
			);
		});

		const center = { lat: 33.5, lng: -81.454145 };
		const zoom = 7;
		return (
			<GoogleMap
				defaultCenter={center}
				defaultZoom={zoom}
				defaultOptions={{ styles: MapStyle }}
			>
				{markers}
			</GoogleMap>
		);
	}
}

PropertiesMap.propTypes = {
	properties: PropTypes.object,
	dispatch: PropTypes.func
};

export default withScriptjs(withGoogleMap(PropertiesMap));
