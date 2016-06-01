import io from 'socket.io-client'
import getClientID from './myID'

console.debug('loaded pubsub')

export let setupPubSub = (wsUrl) => {
  console.log(`Making WebSockets connection to ${wsUrl}`)
  let socket = io(wsUrl)

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

  // let middleware = store => next => action => {
  //   console.log('dispatching', action)
  //   let result = next(action)
  //   console.log('next state', store.getState())
  //   return result
  // }

  return {socket, middleware}
}
