import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import TestHarness from './components/TestHarness'
import Main from './components/Main'
import store from './store'
import pubsub from './pubsub'

const ConnectedMain = connect(state => state)(Main)

const routes = <Route>
  <Route path="/" component={ConnectedMain} />
  <Route path="/test" component={TestHarness} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
