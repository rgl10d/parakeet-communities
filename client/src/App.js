import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from './containers/About/About';
import FAQ from './containers/FAQ/FAQ';
import Communities from "./containers/Communities/Communities";
import Apply from "./containers/Apply/Apply";
import Contact from "./containers/Contact/Contact";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/communities" component={Communities} />
        <Route exact path="/apply" component={Apply} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
