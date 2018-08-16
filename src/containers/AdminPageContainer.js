/* External Dependencies */
import React, { Component } from "react";
import { connect } from "react-redux";
/* Internal Dependencies */

import { login } from "src/util/firebaseApi";

/**
 *
 */
class AdminPageContainer extends Component {
	/**
	 * Creates the AdminPageComponent
	 * @param {Object} props Props passed to the component
	 */
	constructor(props) {
		super(props);

		this.state = {
			isAdmin: false
		};

		this.handleLogin = this.handleLogin.bind(this);
	}
	/**
	 *
	 */
	handleLogin() {
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		login(email, password);
	}

	/**
	 *
	 */
	render() {
		const isAdmin = this.state.isAdmin;
		return (
			<div>
				<div className="box">
					<form>
						<div className="field">
							<div className="control">
								<input
									id="email"
									className="input is-large"
									type="email"
									placeholder="Your Email"
								/>
							</div>
						</div>

						<div className="field">
							<div className="control">
								<input
									id="password"
									className="input is-large"
									type="password"
									placeholder="Your Password"
								/>
							</div>
						</div>
						<div className="field" />
						<button
							className="button is-block is-info is-large is-fullwidth"
							onClick={(event) => {
								event.preventDefault();
								this.handleLogin();
							}}
						>
							Login
						</button>
					</form>
				</div>
			</div>
		);
	}
}

/**
 *
 * @param {*} ownProps
 */
function mapStateToProps(ownProps) {
	return {
		dispatch: ownProps.dispatch
	};
}

export default connect(mapStateToProps)(AdminPageContainer);
