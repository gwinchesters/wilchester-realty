/* External Dependencies */
import { connect } from "react-redux";

/* Internal Dependencies */
import EditProperty from "src/components/form/EditProperty";
import { saveProperty, updateSelectedProperty } from "src/actions/properties";
import { closeModal } from "src/actions/modal";
import { getLatLong } from "src/util/googleApiHelper";

/**
 * Maps props from the state to the component
 *
 * @param {Object} state Redux store object
 */
function mapStateToProps(state, ownProps) {
	/**
	 * Handles logic when property form is submitted
	 * @param {Object} formData Object containing the data from the form
	 */
	const submitFunction = (formData) => {
		const dispatch = ownProps.dispatch;

		return getLatLong(formData)
			.then((latLong) => {
				formData.lat = latLong.lat;
				formData.lng = latLong.lng;

				return dispatch(saveProperty(formData));
			})
			.then(() => {
				dispatch(updateSelectedProperty(null));
				return dispatch(closeModal());
			});
	};
	return {
		title: "Add Property",
		onSubmit: submitFunction
	};
}

export default connect(mapStateToProps)(EditProperty);
