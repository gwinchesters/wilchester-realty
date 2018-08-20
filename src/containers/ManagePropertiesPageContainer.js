import { connect } from "react-redux";

import ManagePropertiesPage from "src/components/pages/ManagePropertiesPage";

/**
 * Maps the object in the state to properties for the child component
 * @param {Object} state Redux store
 */
function mapStateToProps(state) {
	return {
		properties: state.properties.get("properties")
	};
}

export default connect(mapStateToProps)(ManagePropertiesPage);
