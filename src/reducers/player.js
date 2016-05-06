import {handleActions} from 'redux-actions'
import * as Actions from '../actions'
import {fromJS} from 'immutable'
import {examples} from '../../doc/example'


export default (state = fromJS(examples.gameStates.initial), action) => {
  switch(action.type) {
    case 'ADD_PLAYER':
      return Actions.AddPlayer(state, action.payload)
    default:
      return state
  }
}
