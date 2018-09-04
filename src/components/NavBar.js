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
			<nav className="navbar is-transparent">
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
					<div className="navbar-end margin-right-lg">
						<NavLink className="navbar-item" to="/properties">
							<p className="is-size-5">PROPERTIES</p>
						</NavLink>
						<NavLink className="navbar-item" to="/">
							<p className="is-size-5">ABOUT</p>
						</NavLink>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
