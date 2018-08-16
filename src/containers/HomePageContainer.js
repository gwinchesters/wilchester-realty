import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Immutable from "immutable";

import { getHomePageTextBlobs } from "src/actions/main";

/**
 * HomePageContainer component
 * TODO: Update this to purely contain map state to props
 */
class HomePageContainer extends Component {
	/**
	 * Creates the HomePageContainer component
	 * @param {Object} props Props passed to the component
	 */
	constructor(props) {
		super(props);

		props.dispatch(getHomePageTextBlobs());
	}
	/**
	 * Renders the HomePageContainer comonent
	 * @returns {JSX}
	 */
	render() {
		const { textBlobs } = this.props;
		const missionStatement = textBlobs.get("missionStatement");
		const textClass =
			"is-italic has-text-weight-semibold has-text-link is-size-5";
		const isLoading = textBlobs.size ? false : true;

		return (
			<div className="hero is-fullheight is-grey">
				{!isLoading && (
					<div className="container margin-top-lg margin-bottom-lg">
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
			</div>
		);
	}
}

HomePageContainer.propTypes = {
	textBlobs: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func
};

/**
 *
 * @param {*} state
 */
function mapStateToProps(state) {
	return {
		textBlobs: state.main.get("textBlobs")
	};
}

export default connect(mapStateToProps)(HomePageContainer);
