import {combineReducers} from 'redux'
import MyID from './myID'

let stateReducers = combineReducers({
  myID: MyID.reducer
})

export default (state, action) => {
  if (action.type === 'SET_STATE')
    return {...state, ...action.payload}
  else
    return stateReducers(state, action)
}

