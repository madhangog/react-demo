import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

// import RootRouter from "./router/index"
import Layout from "./layout/index";

// class App extends React.Component {

//   state = {
//     usename :"",
//     password : "",
//     users : [],
//     isLoggedIn : false
//   }

//   handleLogin = () =>{
//     let username = this.state.username
//     let password = this.state.password

//     let body =  {
//       username : username,
//       password : password
//     }

//     axios.post("http://localhost:5000/login",body)
//       .then((response) => {
//         axios.get("http://localhost:5000/users")
//         .then((res) =>{
//           this.setState({users : res.data, isLoggedIn : true})
//         })
//         alert("success")
//       })
//       .catch((error => {
//         alert("failure")
//       }))
//   }

//   render(){

//     return (
//       <div className="App" style={{display : "flex", flexDirection : "column", width : 200}}>
//         <TextField style={{marginLeft : 30, marginBottom : 30}} id="standard-basic" label="Username" value={this.state.username}  onChange={(e) =>this.setState({username : e.target.value})} />
//         <TextField style={{marginLeft : 30, marginBottom : 30}} id="standard-basic"  type="password" label="Password" value={this.state.password} onChange={(e) =>this.setState({password : e.target.value})}/>
//          <Button style={{marginLeft : 30, marginBottom : 30, backgroundColor : "green"}} variant="contained" color="primary" onClick={this.handleLogin}>
//           Login
//         </Button>

//           {this.state.isLoggedIn &&
//             this.state.users.map(user => {
//                 return <div>
//                     <p>{"name : " +user.name}</p>
//                     <p>{"age  : " +user.age}</p>
//                   </div>
//                 })
//                }
//       </div>
//     );
//   }
// }

// export default App;

const app = () => {
	return <Layout />;
};

export default app;
