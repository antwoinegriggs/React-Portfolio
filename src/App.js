import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/routes/home.js";
import Contact from "./components/routes/contact.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
