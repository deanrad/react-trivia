import {createAction, assignAll} from 'redux-act'
import Actions from './actions'
import socket from './socket'
import {clientOnly} from '../../src/actionMeta'
import getClientID from './myID'
import store from './store'

export default assignAll(Actions, (action) => {
  //mark for this user
  action.meta = action.meta || {}
  action.meta.clientID = getClientID()

  if (!action.meta.skipClient) store.dispatch(action)

  socket.emit('action', action)
})
