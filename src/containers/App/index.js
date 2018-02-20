// @flow

import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import Helmet from 'react-helmet'

import Home from '../Home'
import NotFound from '../NotFound'

import config from '../../config'

import styles from './styles.scss'

const App = () => (
  <div className={styles.container}>
    <Helmet {...config.head} />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
