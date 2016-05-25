import {combineReducers} from 'redux'
import MyID from './myID'
import * as Game from '../../src/models/game'
import * as Player from '../../src/models/player'
import * as Round from '../../src/models/round'

let stateReducers = combineReducers({
  myID: MyID.reducer,
  game: Game.Reducer,
  players: Player.Reducer,
  round: Round.Reducer
})

export default (state, action) => {
  if (action.type === 'SET_STATE')
    return {...state, ...action.payload}
  else
    return stateReducers(state, action)
}

