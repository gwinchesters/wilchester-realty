import React, { Component } from "react";
import PropTypes from "prop-types";

import { updateSelectedProperty } from "src/actions/properties";
import { openModal } from "src/actions/modal";

import { MODAL_TYPE_VIEW_PROPERTY } from "src/components/modal/Modal";

import imgSrc from "resources/img/marker-logo.png";

export const MARKER_SIZE = 25;
export const HOVERED_MARKER_SIZE = MARKER_SIZE * 1.1;

/**
 *
 */
class MapMarker extends Component {
	/**
	 *
	 * @param {*} props
	 */
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	/**
	 *
	 */
	handleClick() {
		const { property, dispatch } = this.props;
		const id = property.get("id");

		dispatch(updateSelectedProperty(id));
		dispatch(openModal(MODAL_TYPE_VIEW_PROPERTY));
	}

	/**
	 *
	 */
	render() {
		const { property, $hover } = this.props;

		const stdStyle = {
			position: "absolute",
			width: MARKER_SIZE,
			height: MARKER_SIZE,
			left: -MARKER_SIZE / 2,
			top: -MARKER_SIZE / 2,
			cursor: "pointer"
		};
		const hoveredStyle = {
			...stdStyle,
			width: HOVERED_MARKER_SIZE,
			height: HOVERED_MARKER_SIZE,
			left: -HOVERED_MARKER_SIZE / 2,
			top: -HOVERED_MARKER_SIZE / 2,
			zIndex: "100"
		};
		const style = $hover ? hoveredStyle : stdStyle;

		return (
			<div style={style} onClick={this.handleClick}>
				<img src={imgSrc} alt="logo" height="100%" width="100%" />
			</div>
		);
	}
}

MapMarker.propTypes = {
	property: PropTypes.object,
	$hover: PropTypes.bool,
	dispatch: PropTypes.func
};

export default MapMarker;
