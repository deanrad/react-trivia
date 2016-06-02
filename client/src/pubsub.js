import {createAction} from 'redux-act'
import io from 'socket.io-client'
import getClientID from './myID'

export let setState = createAction('SET_STATE', state => state, meta => ({clientOnly: true}))

// When the server gives us a new state, call the setState action
let setLocalStateFromServer = (socket) => socket.on('state', setState)

// Create a reducer that siphons off setState events, passing others through
export let createServerUpdatingReducer = (origReducer) =>
  (state, action) => {
    if (action.type === 'SET_STATE') {
      console.debug('Updating local state to', state)
      // overlays the state from the server onto local state
      return {...state, ...action.payload}
    }
    else {
      return origReducer(state, action)
    }
  }

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
