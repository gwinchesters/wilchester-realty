/** External Dependencies */
import { connect } from "react-redux";
/** Internal Dependencies */
import HomePage from "src/components/pages/HomePage";
import { getHomePageTextBlobs } from "src/actions/main";

/**
 * Maps any functions that dispatch actions to the redux store to the child
 * component
 * @param {Function} dispatch Dispatch action to redux
 */
function mapDispatchToProps(dispatch) {
	return {
		getTextBlobs: () => {
			dispatch(getHomePageTextBlobs());
		}
	};
}

/**
 * Maps the state of the redux store and registers any stored value with the
 * child component by passing it in as a property
 * @param {Object} state
 */
function mapStateToProps(state) {
	return {
		textBlobs: state.main.get("textBlobs")
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
