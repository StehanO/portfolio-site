import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import HomePage from './index.jsx';
import ResumePage from './resume.jsx';

var routes = module.exports = (
  <Router>
    <Route path='/' component={HomePage} />
    <Route path='/resume' component={ResumePage} />
  </Router>
);
