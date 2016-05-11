import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'
import {playerReducer} from './players/index'
import responseReducer from './reducers/response'

export default combineReducers({
  players: playerReducer,
  responses: responseReducer
})

// handleActions({
//   players: playerReducer,
//   response: responseReducer
// })
