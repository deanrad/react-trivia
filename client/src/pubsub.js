import {createAction} from 'redux-act'
import io from 'socket.io-client'
import getClientID from './myID'

export let setState = createAction('SET_STATE', state => state, meta => ({clientOnly: true}))

export let setupPubSub = (wsUrl) => {
  console.log(`Making WebSockets connection to ${wsUrl}`)
  let socket = io(wsUrl)
  socket.on('state', setState)

  // middleware to send actions not marked clientOnly to the server
  let middleware = store => next => (action) => {
    let sendToServer = !(action.meta && action.meta.clientOnly)

    // some actions need not be applied locally vs let the server handle them
    let applyLocal = !(action.meta && action.meta.skipClient)

    if (sendToServer) {
      let clientID = getClientID()
      let meta = {clientID}
      let payload = {...action, meta}
      console.log('in custom middleware, sending to server: ', payload)
      socket.emit('action', payload)
    }
    return applyLocal && next(action)
  }

  return {socket, middleware}
}
