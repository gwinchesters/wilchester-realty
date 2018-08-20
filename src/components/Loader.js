/* External Dependencies */
import React from "react";

/**
 * Stateless component for the Loader
 * @param {Object} children Children passed to the component
 */
const Loader = () => {
	return (
		<div className="container padding-top-lg padding-bottom-lg">
			<div className="loading" />
		</div>
	);
};

export default Loader;
