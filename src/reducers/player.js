import {handleActions} from 'redux-actions'
import * as Actions from '../actions'
import {examples} from '../doc/example'

export default (state = examples.gameStates.initial, action) => {
  switch(action.type) {
    case 'ADD_PLAYER':
      return Actions.AddPlayer(state, action.payload)
    default:
      return state
  }
}
//   'ADD_PLAYER': (state, action) => {
//     throw 'ADD_PLAYER reducer handler'
//     state.set('players', action.payload)
//   }
// })
