/* External Dependencies */
import { connect } from "react-redux";
/* Internal Dependencies */
import LoginPage from "src/components/pages/LoginPage";
import { loginSuccess } from "src/actions/session";

/**
 * Maps redux store action functions to the props of the child component
 * @param {Function} dispatch Sends action handler to redux store
 */
function mapDispatchToProps(dispatch) {
	return {
		successFunction: () => {
			dispatch(loginSuccess());
		}
	};
}
/**
 *
 * @param {*} state
 */
function mapStateToProps(state) {
	return {
		isAdmin: state.session.get("isAdmin")
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPage);
