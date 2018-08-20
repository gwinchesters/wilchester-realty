/* External Dependencies */
import { connect } from "react-redux";
/* Internal Dependencies */
import DeleteProperty from "src/components/DeleteProperty";
import { removeProperty, updateSelectedProperty } from "src/actions/properties";
import { closeModal } from "src/actions/modal";

/**
 *
 *
 * @param {*} state
 * @returns
 */
function mapStateToProps(state, ownProps) {
	const { dispatch } = ownProps;
	const property = state.properties.get("selectedProperty");

	/**
	 *
	 * @param {*} id
	 */
	const deleteFunction = () => {
		dispatch(removeProperty(property.get("id")));
		dispatch(closeModal());
		dispatch(updateSelectedProperty(null));
	};
	return {
		property: state.properties.get("selectedProperty"),
		deleteFunction: deleteFunction
	};
}

export default connect(mapStateToProps)(DeleteProperty);
