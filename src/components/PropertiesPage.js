/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

/* Internal Dependencies */
import PropertiesMap from "src/components/PropertiesMap";
import PropertiesGrid from "src/components/PropertiesGrid";

import {
	PROPERTIES_MAP,
	PROPERTIES_GRID,
	GOOGLE_MAPS_URL
} from "src/util/constants";
import { getProperties } from "src/actions/properties";

const loadingElement = <div style={{ height: "100%" }} />;
const containerElement = <div style={{ height: "700px" }} />;
const mapElement = <div style={{ height: "100%" }} />;

class PropertiesPage extends Component {
	constructor(props) {
		super(props);

		props.dispatch(getProperties());

		this.state = { activeContent: PROPERTIES_MAP };

		this.switchActiveContent = this.switchActiveContent.bind(this);
	}

	switchActiveContent(activeContent) {
		this.setState({
			activeContent: activeContent
		});
	}
	render() {
		const { properties, dispatch } = this.props;
		const isAdmin = true;
		const mapActive = this.state.activeContent === PROPERTIES_MAP;
		const gridActive = this.state.activeContent === PROPERTIES_GRID;
		const mapBtnClass = mapActive
			? "is-active has-text-weight-semibold"
			: "";
		const gridBtnClass = gridActive
			? "is-active has-text-weight-semibold"
			: "";

		return (
			<section className="properties-page">
				<div className="container padding-top-md">
					<div className="tabs">
						<ul>
							<li className={mapBtnClass}>
								<a
									onClick={(event) => {
										event.preventDefault();
										this.switchActiveContent(
											PROPERTIES_MAP
										);
									}}
								>
									Map View
								</a>
							</li>
							<li className={gridBtnClass}>
								<a
									onClick={(event) => {
										event.preventDefault();
										this.switchActiveContent(
											PROPERTIES_GRID
										);
									}}
								>
									Grid View
								</a>
							</li>
						</ul>
					</div>
					{mapActive && (
						<section className="map-container">
							<div className="box black">
								<PropertiesMap
									googleMapURL={GOOGLE_MAPS_URL}
									loadingElement={loadingElement}
									containerElement={containerElement}
									mapElement={mapElement}
									properties={properties}
								/>
							</div>
						</section>
					)}
					{gridActive && (
						<PropertiesGrid
							isAdmin={isAdmin}
							dispatch={dispatch}
							properties={properties}
						/>
					)}
				</div>
			</section>
		);
	}
}

PropertiesPage.propTypes = {
	properties: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func
};

export default PropertiesPage;
