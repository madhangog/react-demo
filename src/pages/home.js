import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SideMenu from "../components/sideMenu";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button"
import axios from "axios"


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

  
function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}
  
// const rows = [
// 	{name : 'Frozen yoghurt', calories :  159, fat : 6.0, carbs : 24, protein: 4.0},
// 	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// 	createData('Eclair', 262, 16.0, 24, 6.0),
// 	createData('Cupcake', 305, 3.7, 67, 4.3),
// 	createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const headings = [
	{align : "left" ,name :"Dessert"},
	{align : "right" ,name :"Calories"},
	{align : "right" ,name :"Fat"},
	{align : "right" ,name :"Carbs"},
	{align : "right" ,name :"Protein"},
	{align : "center" , name : "View"}
] 
class Home extends React.Component {

	state={
		desserts : [
			{name : 'Frozen yoghurt', calories :  159, fat : 6.0, carbs : 24, protein: 4.0},
			createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
			createData('Eclair', 262, 16.0, 24, 6.0),
			createData('Cupcake', 305, 3.7, 67, 4.3),
			createData('Gingerbread', 356, 16.0, 49, 3.9),
		],
		open : false,
		selectedRow : {}
	}

	componentDidMount(){
		axios.get("http://localhost:5000/desserts")
			.then(res => {
				var responseData = res.data
				var desserts = responseData.data
				this.setState({desserts : desserts})
			})
			.catch(err => 
				alert(err.message))
	}

	 handleClose = () => {
		// setOpen(false);
		this.setState({ open : false})
	  };

	  handleClickViewButton = (id) =>{
		this.setState({open : true}) 

		axios.get("http://localhost:5000/desserts/" + id)
			.then(res =>{
				var responseData = res.data
				var dessertDetails = responseData.data
				this.setState({selectedRow : dessertDetails})
			})
	  }
	
	render() {

		return (
			<div>
				<p>Home</p>
				<TableContainer component={Paper}>
				<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						{headings.map(heading =>{
							return 	<TableCell  align={heading.align}>{heading.name}</TableCell>
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{this.state.desserts.map((row) => (
					<TableRow key={row.name}>
						<TableCell component="th" scope="row">
						{row.name}
						</TableCell>
						<TableCell align="right">{row.Calories}</TableCell>
						<TableCell align="right">{row.Fat}</TableCell>
						<TableCell align="right">{row.Carbs}</TableCell>
						<TableCell align="right">{row.Protein}</TableCell>
						<TableCell align="center">
							<Button 
								style={{marginLeft : 20, backgroundColor : "green", color : "#FFF"}} 
								variant="contained"
								onClick={() => this.handleClickViewButton(row.id)}
								>
								View</Button>
						</TableCell>
					</TableRow>
					))}
				</TableBody>
				</Table>
				</TableContainer>

				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Desert Details</DialogTitle>
					<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{/* Let Google help apps determine location. This means sending anonymous location data to
						Google, even when no apps are running. */}
						{this.state.selectedRow.name}
					</DialogContentText>
					</DialogContent>
					<DialogActions>
					{/* <Button onClick={this.handleClose} color="primary">
						Disagree
					</Button> */}
					<Button onClick={this.handleClose} color="primary" autoFocus>
						close
					</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default Home;

