import {createAction, createReducer} from 'redux-act'
import io from 'socket.io-client'
import getClientID from './myID'
import {clientOnly} from '../../src/actionMeta'

export let setState = createAction('SET_STATE', ...clientOnly)

// When the server gives us a new state, call the setState action
let setLocalStateFromServer = (socket) => socket.on('state', setState)

// A reducer that overlays server-provided states onto our existing one
export let serverStateReducer = createReducer({
  [setState]: (existingState, serverState) => ({...existingState, ...serverState})
})

export let setupPubSub = (wsUrl) => {
  console.log(`Making WebSockets connection to ${wsUrl}`)
  let socket = io(wsUrl)

  setLocalStateFromServer(socket)

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
