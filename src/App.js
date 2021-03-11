import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import TeamDetail from './Components/TeamDetail/TeamDetail';

function App() {
  
  return (
    <div>
    
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
