/** External Dependencies */
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

/** Internal Dependencies */
import NavBar from "src/components/NavBar";
import UnderConstruction from "src/components/pages/UnderConstruction";
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
				<div className="app-container">
					<NavBar />
					<UnderConstruction />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
