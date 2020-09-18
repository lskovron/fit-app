import React from "react";
import { Route, Switch, withRouter } from "react-router";

import './App.css';
import Questionnaire from './components/Assessment/Questionnaire';
import Results from './components/Results/Results';
import LandingPage from './components/LandingPage';
import DemoFields from "./components/DemoFields";

const App = ({ location, history }) => {
  return (
    <div id="page-container">
      <Switch>
        <Route exact path='/' render={LandingPage} />
        <Route path='/assessment' render={Questionnaire} />
        <Route path='/your-info' render={DemoFields} />
        <Route path='/results' render={Results} />
      </Switch>
    </div>
  );
}

export default withRouter(App);