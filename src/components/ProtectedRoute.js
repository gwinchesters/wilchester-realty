import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

/**
 * Stateless component for protected route
 * @param {Object} component Component to render
 * @param {boolean} isAdmin Is the user authenticated
 */
const ProtectedRoute = ({ component: Component, isAdmin, location }) => {
	let content = (
		<Redirect
			to={{
				pathname: "/admin/login",
				state: { from: location }
			}}
		/>
	);
	if (isAdmin) {
		content = <Component />;
	}

	return (
		<Route
			render={() => {
				return content;
			}}
		/>
	);
};

ProtectedRoute.propTypes = {
	component: PropTypes.any,
	isAdmin: PropTypes.bool.isRequired,
	location: PropTypes.object
};

export default ProtectedRoute;
