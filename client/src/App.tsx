import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './style/index.less'

import ErrorProvider from './context/error/ErrorContext'
import { DashBoard } from './view'

const App = () => (
  <ErrorProvider>
    <Switch>
      <Route exact path="/" component={DashBoard} />
      <Redirect to="/" />
    </Switch>
  </ErrorProvider>
)

export default App
