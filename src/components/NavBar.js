import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logoSrc from "resources/img/logo.png";

/**
 *
 */
class NavBar extends Component {
	/**
	 *
	 */
	render() {
		return (
			<nav className="navbar is-dark">
				<div className="navbar-brand">
					<img alt="Logo" src={logoSrc} />
					<a
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>
				<div className="navbar-menu">
					<div className="navbar-start">
						<NavLink className="navbar-item" to="/">
							Home
						</NavLink>
						<NavLink className="navbar-item" to="/properties">
							Properties
						</NavLink>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
