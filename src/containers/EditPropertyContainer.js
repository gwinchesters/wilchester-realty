/* External Dependencies */
import { connect } from "react-redux";
/* Internal Dependencies */
import EditProperty from "src/components/form/EditProperty";
import { updatePropertyData } from "src/actions/properties";
import { closeModal } from "src/actions/modal";
import { getLatLong } from "src/util/googleApiHelper";

/**
 *
 * @param {*} state
 * @param {*} ownProps
 */
function mapStateToProps(state, ownProps) {
	const selectedProperty = state.properties.get("selectedProperty").toJS();
	/**
	 *
	 * @param {*} formData
	 */
	const submitFunction = (formData) => {
		const dispatch = ownProps.dispatch;

		return getLatLong(formData)
			.then((latLong) => {
				formData.lat = latLong.lat;
				formData.lng = latLong.lng;

				return dispatch(
					updatePropertyData(selectedProperty.id, formData)
				);
			})
			.then(() => {
				return dispatch(closeModal());
			});
	};

	return {
		title: "Edit Property",
		initialValues: selectedProperty,
		onSubmit: submitFunction
	};
}

export default connect(mapStateToProps)(EditProperty);
