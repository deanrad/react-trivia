import {createAction, bindAll} from 'redux-act'
import MyID from './myID'
import store from './store'

// returns all actions bound to the store
let setMyID = MyID.action
let setState = createAction('SET_STATE')

let actions = {
  setMyID,
  setState
}

let boundActions = bindAll(actions, store)
export default boundActions
