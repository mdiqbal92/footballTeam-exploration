import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import TeamDetail from './Components/TeamDetail/TeamDetail';

function App() {
  const headerStyle = {
    backgroundImage: "url(https://www.spanish-fiestas.com/wp-content/uploads/2020/06/mai-bernabeu-02-1600x900.jpg)", 
    height: "200px",
    textAlign: "center",
    paddingTop: "80px",
    color: "white",
    backgroundRepeat: "no-repeat"
    
  }
  return (
    <div>
    <h1 style = {headerStyle}> Football Team exploration </h1>
    <Router>
      <Switch>

      <Route exact path = "/">
      <Home></Home>
      </Route>

      <Route path = "/home">
      <Home></Home>
      </Route>

      <Route path = "/team-details/:idTeam">
      <TeamDetail></TeamDetail>
      </Route>

      <Route path = "*">
      <NotFound></NotFound>
      </Route>

      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
