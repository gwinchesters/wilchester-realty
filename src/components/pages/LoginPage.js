/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
/* Internal Dependencies */
import Login from "src/components/form/Login";
import { login } from "src/util/firebaseApi";

/**
 * Handles the validation of admin users
 */
class LoginPage extends Component {
	/**
	 * Constructors the AdminPage component
	 * @param {Object} props Props passed into the component
	 */
	constructor(props) {
		super(props);

		this.handleLogin = this.handleLogin.bind(this);

		this.state = { error: null, redirectToReferrer: false };
	}

	/**
	 * Handles login a user in
	 * @param {Object} formData Data from login form
	 */
	handleLogin(formData) {
		return login(formData)
			.then(() => {
				this.props.successFunction(formData.email);
				this.setState({ redirectToReferrer: true });
			})
			.catch((e) => {
				this.setState({ error: e });
			});
	}

	/**
	 * Renders the AdminPage component
	 */
	render() {
		const { location } = this.props;
		const state = location ? location.state : null;
		let from = state ? state.from : null;
		if (!from) {
			from = { pathname: "/admin/manageProperties" };
		}
		const { redirectToReferrer } = this.state;

		if (redirectToReferrer) {
			return <Redirect to={from} />;
		}

		return (
			<section className="login-page">
				<div className="container padding-top-md">
					<div className="box black">
						<Login onSubmit={this.handleLogin} />
					</div>
				</div>
			</section>
		);
	}
}

LoginPage.propTypes = {
	successFunction: PropTypes.func.isRequired,
	isAdmin: PropTypes.bool
};

export default LoginPage;
