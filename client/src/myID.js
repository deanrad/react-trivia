import {createAction, createReducer} from 'redux-act'
import uuid from 'uuid'

const localStorageKey = 'ReactTrivia-clientId'

let setMyId = createAction('SET_MY_ID')

function getClientId() {
  let id = localStorage.getItem(localStorageKey)
  if (!id) {
    id = uuid.v4()
    localStorage.setItem(key, id)
  }
  return id
}

export default {
  action: setMyId,
  reducer: createReducer({
    [setMyId]: (_, id) => id || getClientId()
  }, null)
}
