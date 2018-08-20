import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import Input from "src/components/form/Input";
import Button from "src/components/Button";

/**
 * Login Form Component for admin users
 */
class Login extends Component {
	/**
	 * Renders the AdminLogin form component
	 */
	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="card">
				<header className="card-header">
					<div className="card-header-title">
						<p>Login</p>
					</div>
				</header>
				<div className="card-content">
					<form id="loginFormContainer" onSubmit={handleSubmit}>
						<div className="field">
							<Field
								name="email"
								placeholder="Email"
								component={Input}
							/>
						</div>
						<div className="field">
							<Field
								name="password"
								inputType="password"
								placeholder="Password"
								component={Input}
							/>
						</div>
					</form>
				</div>
				<footer className="card-footer">
					<div className="card-footer-item">
						<Button
							text={"Submit"}
							type={"is-success"}
							onClickCallback={handleSubmit}
						/>
					</div>
				</footer>
			</div>
		);
	}
}

Login.propTypes = {
	handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
	form: "login",
	enableReinitialize: true
})(Login);
