import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "styles/base.scss";
import ModalContainer from "src/containers/ModalContainer";
import NavBar from "src/components/NavBar";
import Routes from "src/components/Routes";
import Footer from "src/components/Footer";
fontawesome.library.add(brands);
fontawesome.library.add(faEdit, faTrashAlt);

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
