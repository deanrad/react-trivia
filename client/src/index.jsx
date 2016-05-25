import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from './store'

const TestHarness = (props) => (
  <div>
    <h2>Action Triggers</h2>
  </div>
)

const Main = (props) => (
  <div>
    <h2>Main</h2>
  </div>
)

const Admin = (props) => (
  <div>
    <h2>Admin</h2>
  </div>
)

const routes = <Route>
  <Route path="/" component={Main} />
  <Route path="/admin" component={Admin} />
  <Route path="/test" component={TestHarness} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
