import React from "react";
import { Route, Switch, withRouter } from "react-router";
import Container from '@material-ui/core/Container';

import Questionnaire from './components/Assessment/Questionnaire';
import Results from './components/Results/Results';
import LandingPage from './components/LandingPage';

const App = ({ location, history }) => {
  return (
    <>
      <Container maxWidth="sm">
        <Switch>
          <Route exact path='/' render={LandingPage} />
          <Route path='/assessment' render={Questionnaire} />
          <Route path='/results' render={Results} />
        </Switch>
      </Container>
    </>
  );
}

export default withRouter(App);