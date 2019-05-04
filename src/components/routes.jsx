import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../modules/home';
import Checkout from '../modules/checkout';
import Resultado from '../modules/resultado';
import Timeline from '../modules/timeline';


export default () => (
  <Router history={hashHistory}>
    <Route path='/home' component={Home} />
    <Route path='/checkout' component={Checkout} />
    <Route path='/resultado' component={Resultado} />
		<Route path='/timeline' component={Timeline} />
    <Redirect from='*' to='/home' />
  </Router>
)