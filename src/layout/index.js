import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SideMenu from "../components/sideMenu";

import RootRouter from "../router/index";

class Layout extends React.Component {
	state = {
		selectedSideMenu: "Home",
	};

	handleRedirect = (menuItem) =>{
		this.setState({ selectedSideMenu : menuItem})
	}
	render() {
		return (
			<Grid container spacing={3} style={{ height: "100vh" }}>
				{/* //sidebar */}
				{/* <Grid item xs={2} style={{ border: "1px solid #000" }}>
					<SideMenu 
						selectedSideMenu={this.state.selectedSideMenu} 
						handleChangeSideMenu={(menuItem) => this.handleRedirect(menuItem)} />
				</Grid> */}
				{/* main panel */}
				<Grid item xs={10} style={{}}>
					<RootRouter 
						selectedSideMenu={this.state.selectedSideMenu}/>
				</Grid>
			</Grid>
		);
	}
}

export default Layout;

// const Home = () => {
// 	const sideMenu = ["Home", "Movies", "Generes"];
// 	const [selectedSideMenu, setSelectedSideMenu] = useState("Home");
// 	const [value, setValue] = useState(1);

// 	return (
// 		<Grid container spacing={3} style={{ height: "100vh" }}>
// 			{/* //sidebar */}
// 			<Grid item xs={2} style={{ border: "1px solid #000" }}>
// 				<div style={{ listStyleType: "none", marginTop: 100 }}>
// 					{sideMenu.map((menuItem) => {
// 						return (
// 							<p
// 								style={
// 									selectedSideMenu == menuItem
// 										? styles.selectedSideBarItem
// 										: styles.sideBarItem
// 								}
// 								onClick={() => setSelectedSideMenu(menuItem)}
// 							>
// 								{menuItem}
// 							</p>
// 						);
// 					})}
// 				</div>
// 			</Grid>
// 			{/* main panel */}
// 			<Grid item xs={10} style={{}}></Grid>
// 		</Grid>
// 	);
// };
