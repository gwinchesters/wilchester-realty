import React, { Component } from "react";
import { Route } from "react-router-dom";

import HomePageContainer from "src/containers/HomePageContainer";
import PropertiesPageContainer from "src/containers/PropertiesPageContainer";
import AdminPageContainer from "src/containers/AdminPageContainer";

class Routes extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={HomePageContainer} />
				<Route
					exact
					path="/properties"
					component={PropertiesPageContainer}
				/>
				<Route exact path="/admin" component={AdminPageContainer} />
			</div>
		);
	}
}

export default Routes;
