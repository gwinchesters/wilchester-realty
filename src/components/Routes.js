import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import ProtectedRouteContainer from "src/containers/ProtectedRouteContainer";
import HomePageContainer from "src/containers/HomePageContainer";
import PropertiesPageContainer from "src/containers/PropertiesPageContainer";
import LoginPageContainer from "src/containers/LoginPageContainer";
import ManagePropertiesPageContainer from "src/containers/ManagePropertiesPageContainer";

/**
 * Routes component
 */
class Routes extends Component {
	/**
	 * Renders the routes component
	 */
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePageContainer} />
				<Route
					exact
					path="/properties"
					component={PropertiesPageContainer}
				/>
				<Route
					exact
					path="/admin/login"
					component={LoginPageContainer}
				/>
				<ProtectedRouteContainer
					exact
					path="/admin/manageProperties"
					component={ManagePropertiesPageContainer}
				/>
			</Switch>
		);
	}
}

export default Routes;
