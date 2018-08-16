import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "styles/base.css";
import App from "src/components/App";
import registerServiceWorker from "src/registerServiceWorker";
import store from "src/store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
