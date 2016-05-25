import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from './store'
import Actions from './actions'
import {setupPubSub} from './pubsub'

const wsUrl = 'http://react-trivia.herokuapp.com'
//const wsUrl = location.protocol + '//' + `${location.hostname}:8470`
const socket = setupPubSub(wsUrl)

window.socket = socket
window.Store = store
window.Actions = Actions


const TestHarness = (props) => (
  <h2>Action Triggers</h2>
)

const Main = (props) => (
  <h2>Main</h2>
)

const Admin = (props) => (
  <h2>Admin</h2>
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
