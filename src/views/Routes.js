import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './Components/Layout'
import HomeView from './HomeView'
import ResumeView from './ResumeView'

const Home = () => <Layout title='full stack developer'><HomeView /></Layout>
const Resume = () => <Layout title='resume'><ResumeView /></Layout>

const Routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/resume' component={Resume} />
  </Router>
)

export default Routes
