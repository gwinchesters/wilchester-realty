/** External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Immutable from "immutable";
import Loader from "src/components/Loader";

import src from "resources/img/homepageArt.png";

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
		const imgStyle = {
			position: "absolute",
			bottom: "20%",
			left: "0"
		};

		const contStyle = {
			position: "absolute",
			width: "100%",
			height: "100%"
		};

		return (
			<section className="home-page">
				<div style={contStyle}>
					<img
						style={imgStyle}
						src={src}
						alt="arc"
						width="75%"
						height="55%"
					/>
				</div>

				{isLoading ? (
					<Loader />
				) : (
					<div className="container padding-top-md">
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
