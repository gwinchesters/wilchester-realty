import { connect } from "react-redux";

import PropertiesPage from "src/components/pages/PropertiesPage";

/**
 * Maps values stored in the state to the props of the child component
 * @param {Object} state
 */
function mapStateToProps(state) {
	return {
		properties: state.properties.get("properties")
	};
}

export default connect(mapStateToProps)(PropertiesPage);
