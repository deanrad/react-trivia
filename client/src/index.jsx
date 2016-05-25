import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import store from './store'
import Actions from './actions'

console.debug('loading index')

window.Store = store
window.Actions = Actions

const TestHarness = (props) => (
  <h2>Action Triggers</h2>
)

const Main = ({game, round}) => (
  <div>
    <h3>
        Game: {game && game.title}
        <i>({game && game.status})</i>
    </h3>
  </div>
)

const ConnectedMain = connect(state => state)(Main)

const Admin = (props) => (
  <h2>Admin</h2>
)

const routes = <Route>
  <Route path="/" component={ConnectedMain} />
  <Route path="/admin" component={Admin} />
  <Route path="/test" component={TestHarness} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
