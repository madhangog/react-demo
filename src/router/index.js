import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../pages/home"
import Movies from "../pages/movies"
import Generes from "../pages/genres"


const MainRoutes = [
  {name : "Home", path: "/home" , component : <Home />},
  {name : "Movies", path: "/movies" , component : <Movies />},
  {name : "Genres", path: "/genres" , component : <Generes />},
]
export default function App(props) {
  const selectedSideMenu = props.selectedSideMenu
  return (
    <Router>
        <Switch>
           <Route path="/home" component={() => <Home />} />
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/genres">
            <Generes />
          </Route> 
        </Switch>
    </Router>
  );
}
