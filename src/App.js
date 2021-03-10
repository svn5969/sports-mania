import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ClubDetail from "./Components/ClubDetail/ClubDetail";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Switch>


            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/clubDetail/:idTeam">
              <ClubDetail></ClubDetail>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
