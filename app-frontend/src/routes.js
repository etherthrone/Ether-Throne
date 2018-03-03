import React from 'react';
import { Router, Route } from 'react-router';
import HomePage from './containers/HomePage';
import PresalePage from './containers/PresalePage';
import SigninPage from './containers/SigninPage';

let requireAuth = (nextState, replace) => {
  if (!localStorage.getItem('user')) {
      replace({
          pathname: '/sign-in',
          state: {
              nextPathname: nextState.location.pathname
          }
      });
  }
};

export default (
    <Router>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/pre-sale' component={PresalePage} onEnter={requireAuth} />
        <Route exact path='/sign-in' component={SigninPage} />
    </Router>
);