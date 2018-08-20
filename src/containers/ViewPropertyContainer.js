/* External Dependencies */
import { connect } from "react-redux";
/* Internal Dependencies */
import ViewProperty from "src/components/ViewProperty";

/**
 *
 * @param {*} state
 * @returns
 */
function mapStateToProps(state) {
	return {
		property: state.properties.get("selectedProperty")
	};
}

export default connect(mapStateToProps)(ViewProperty);
