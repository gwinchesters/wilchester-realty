import { connect } from "react-redux";

import PropertiesPage from "src/components/PropertiesPage";

/**
 *
 * @param {*} state
 */
function mapStateToProps(state) {
	return {
		properties: state.properties.get("properties")
	};
}

export default connect(mapStateToProps)(PropertiesPage);
