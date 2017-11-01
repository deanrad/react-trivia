import { combineReducers } from "redux"
import * as Game from "../../src/models/game"
import * as Player from "../../src/models/player"
import * as Round from "../../src/models/round"

let stateReducer = combineReducers({
  game: Game.Reducer,
  players: Player.Reducer,
  round: Round.Reducer
})

// Siphon off setState calls, passing others through
export default function(oldState, action) {
  if (action.type === "setState") return action.payload

  return stateReducer(oldState, action)
}
