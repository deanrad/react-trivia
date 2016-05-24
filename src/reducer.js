import {combineReducers} from 'redux'
import {createReducer} from 'redux-act'
import * as Player from './models/player'
import * as Game from './models/game'
import * as Round from './models/round'

export default combineReducers({
  game: Game.Reducer,
  players: Player.Reducer,
  round: Round.Reducer
})
