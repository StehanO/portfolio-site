import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Home } from './index.jsx';
import { Resume } from './resume.jsx';

const Routes = module.exports = (
  <Router>
    <Route path='/' component={Home} />
    <Route path='/resume' component={Resume} />
  </Router>
);
