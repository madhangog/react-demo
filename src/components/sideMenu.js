import React from "react";


const sideMenu = [{name : "Home", path: "/home"}, {name : "Movies", path :"/movies"}, {name :"Generes", path : "/genres"}];

const styles = {
	selectedSideBarItem: {
		padding: 10,
		color: "#fff",
		marginTop: 20,
		cursor: "pointer",
		backgroundColor: "#310c75",
	},
	sideBarItem: {
		padding: 10,
		color: "#310c75",
		marginTop: 20,
		cursor: "pointer",
		backgroundColor: "#FFF",
	},
};

export default class SideMenu extends React.Component {


	render() {
		const selectedSideMenu = this.props.selectedSideMenu
		const handleChangeSideMenu = this.props.handleChangeSideMenu
		return (
			<div style={{ listStyleType: "none", marginTop: 100 }}>
				{sideMenu.map((menuItem) => {
					return (
						<p
							style={
								selectedSideMenu == menuItem
									? styles.selectedSideBarItem
									: styles.sideBarItem
							}
							onClick={() => handleChangeSideMenu(menuItem)}
						>
							{menuItem.name}
						</p>
					);
				})}
			</div>
		);
	}
}
