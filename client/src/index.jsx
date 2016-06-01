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
  <div>
    <h2>Action Triggers</h2>
    <hr/>
    <button onClick={() => Actions.advanceQuestion()}>Advance Question</button>
  </div>
)

const Round = ({question, responses}) => {
  let {id, prompt, choices=[]} = question || {}

  return (<div className="voting">
      <div>
        Question: {prompt}
      </div>
      <div>
      {choices.map(choice =>
        <button
          key={choice}
          onClick={() => Actions.answerQuestion({choice, questionId: id})}
          >
          <h1>{choice}</h1>
        </button>
      )}
      </div>
    </div>)
}

const Main = ({game={}, round={}}) => (
  <div>
    <a href="#test">Test Harness</a>
    <h3>
        Game: {game.title}
        <i>({game.status})</i>
        <Round {...round}/>
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
