/** External Dependencies */
import React, { Component } from "react";

/**
 * UnderConstruction Component
 */
class UnderConstruction extends Component {
	/**
	 * Renders the UnderConstruction component
	 */
	render() {
		const style = { width: "75%", margin: "auto" };
		const infoStyle = { width: "50%", margin: "auto" };
		return (
			<section className="home-page">
				<div className="center" style={style}>
					<p className="is-size-1 has-text-black-bis has-text-weight-bold">
						COMING SOON
					</p>
					<div style={infoStyle}>
						<p className="is-size-4">
							Our website is under construction. For any business
							inquiries, please contact us at
							<strong> info@wilchesterrealtygroup.com</strong>.
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default UnderConstruction;
