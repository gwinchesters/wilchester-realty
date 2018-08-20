/** External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Immutable from "immutable";

/**
 * HomePage Component
 */
class HomePage extends Component {
	/**
	 * Constructs the HomePage Component
	 * @param {Object} props Props passed into the component
	 */
	constructor(props) {
		super(props);

		props.getTextBlobs();
	}
	/**
	 * Renders the HomePage component
	 */
	render() {
		const { textBlobs } = this.props;
		const isLoading = textBlobs.size ? false : true;
		const missionStatement = textBlobs.get("missionStatement");
		const textModifiers = [
			"is-italic",
			"has-text-weight-semibold",
			"has-text-link",
			"is-size-5"
		];
		const textClass = textModifiers.join(" ");

		return (
			<section className="home-page">
				{!isLoading && (
					<div className="container padding-top-md">
						<article className="box">
							<p className={textClass}>{missionStatement}</p>
						</article>
						<div className="margin-top-lg center">
							<Link
								className="button is-info is-medium"
								to="/properties"
							>
								View Properties
							</Link>
						</div>
					</div>
				)}
			</section>
		);
	}
}

HomePage.propTypes = {
	textBlobs: PropTypes.instanceOf(Immutable.Map),
	getTextBlobs: PropTypes.func
};

export default HomePage;
