/** External Dependencies */
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

/** Internal Dependencies */
import ModalContainer from "src/containers/ModalContainer";
import NavBar from "src/components/NavBar";
import Routes from "src/components/Routes";
import Footer from "src/components/Footer";
import "src/util/fontAwesomeIcons.js";
import "styles/base.scss";

/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
	/**
	 *
	 *
	 * @returns
	 * @memberof App
	 */
	render() {
		return (
			<Router>
				<div>
					<NavBar />
					<Routes />
					<ModalContainer />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
