import {createAction, assignAll} from 'redux-act'
import Actions from './actions'
import socket from './socket'
import {clientOnly} from '../../src/actionMeta'
import getClientID from './myID'

export default (store) => assignAll(Actions, (action) => {
  //mark for this user
  action.meta.clientID = getClientID()

  if (!action.meta.skipClient) store.dispatch(action)

  socket.emit('action', action)
})
