import {combineReducers} from 'redux'
import * as Game from '../../src/models/game'
import * as Player from '../../src/models/player'
import * as Round from '../../src/models/round'
import {serverStateReducer} from './pubsub'

let stateReducer = combineReducers({
  game: Game.Reducer,
  players: Player.Reducer,
  round: Round.Reducer
})

let applyPreReducers = (preReducers, origReducer) => {
  return (state, action) => {
    for(let reducer of preReducers) {
      let newState = reducer(state, action)
      if (newState != state) return newState
    }

    return origReducer(state, action)
  }
}

// Create a reducer that siphons off setState events, passing others through
export default applyPreReducers([serverStateReducer], stateReducer)
