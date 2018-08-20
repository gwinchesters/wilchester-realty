import { connect } from "react-redux";
import ProtectedRoute from "src/components/ProtectedRoute";

/**
 *
 * @param {*} state
 * @param {*} ownProps
 */
function mapStateToProps(state, ownProps) {
	return {
		isAdmin: state.session.get("isAdmin"),
		location: ownProps.location
	};
}

export default connect(mapStateToProps)(ProtectedRoute);
