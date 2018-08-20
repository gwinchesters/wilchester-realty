/* External Dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* Internal Dependencies */
import Tile from "src/components/Tile";
import PropertyCard from "src/components/PropertyCard";

/**
 * Properties Grid component
 */
class PropertiesGrid extends Component {
	/**
	 * Renders the Properties Grid Component
	 */
	render() {
		const { properties, isAdmin, dispatch } = this.props;

		const rowLists = {};
		const rowsListComponent = [];
		let rowIndex = 0;

		properties.forEach((property) => {
			if (rowLists[rowIndex] === undefined) {
				rowLists[rowIndex] = [];
			}

			if (rowLists[rowIndex].length > 3) {
				rowIndex++;
				rowLists[rowIndex] = [];
			}

			const propertyBox = (
				<Tile type="is-child">
					<PropertyCard
						property={property}
						isAdmin={isAdmin}
						dispatch={dispatch}
					/>
				</Tile>
			);

			rowLists[rowIndex].push(propertyBox);
		});

		if (rowLists[rowIndex].length < 4) {
			let dif = 4 - rowLists[rowIndex].length;

			while (dif > 0) {
				rowLists[rowIndex].push(<Tile type="is-child" />);
				dif--;
			}
		}

		Object.keys(rowLists).forEach((key) => {
			const row = [];
			rowLists[key].forEach((tile, index) => {
				const parentTile = (
					<Tile type="is-parent" key={key + index}>
						{tile}
					</Tile>
				);
				row.push(parentTile);
			});
			const ancestorTile = (
				<Tile type="is-ancestor" key={key}>
					{row}
				</Tile>
			);
			rowsListComponent.push(ancestorTile);
		});

		return (
			<div>
				<div className="padding-top-lg padding-bottom-lg">
					{rowsListComponent}
				</div>
			</div>
		);
	}
}

PropertiesGrid.propTypes = {
	properties: PropTypes.object,
	dispatch: PropTypes.func
};

export default PropertiesGrid;
