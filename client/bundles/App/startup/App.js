import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchResults from "../components/SearchResults";
import SpotDetails from "../components/SpotDetails";

const App = props => {
  if (typeof window !== "undefined") {
    return (
      <Router>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route path="/spot/:id">
            <SpotDetails {...props} />
          </Route>
          <Route path="/">
            <SearchResults {...props} />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return <h1>Please turn on your JavaScript</h1>;
  }
};

export default App;
