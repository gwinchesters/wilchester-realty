/* External Dependencies */
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
/* Internal Dependencies */
import main from "src/reducers/main";
import properties from "src/reducers/properties";
import modal from "src/reducers/modal";

const rootReducer = combineReducers({
	form: form,
	main: main,
	properties: properties,
	modal: modal
});

export default rootReducer;
