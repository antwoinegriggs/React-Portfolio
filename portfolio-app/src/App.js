import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./components/routes/home.js";
import Contact from "./components/routes/contact.js";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </HashRouter>
    </div>
  );
}

export default App;
