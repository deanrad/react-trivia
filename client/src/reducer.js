import {combineReducers} from 'redux'
import * as Game from '../../src/models/game'
import * as Player from '../../src/models/player'
import * as Round from '../../src/models/round'
import {createServerUpdatingReducer} from './pubsub'

let stateReducer = combineReducers({
  game: Game.Reducer,
  players: Player.Reducer,
  round: Round.Reducer
})

export default createServerUpdatingReducer(stateReducer)
