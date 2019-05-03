import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../modules/home';
import Checkout from '../modules/checkout';

export default () => (
  <Router history={hashHistory}>
    <Route path='/home' component={Home} />
    <Route path='/checkout' component={Checkout} />
    <Redirect from='*' to='/home' />
  </Router>
)