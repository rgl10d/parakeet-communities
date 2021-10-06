import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from './containers/About/About';
import FAQ from './containers/FAQ/FAQ';
import Communities from "./containers/Communities/Communities";
import Contact from "./containers/Contact/Contact";
import Careers from "./containers/Careers/Careers";
import CommunityPages from "./containers/CommunityPages/CommunityPages";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/communities" component={Communities} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/communities/:communityname" component={CommunityPages} />
      </Switch>
    </Router>
  );
}

export default App;
