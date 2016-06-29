import socket from './socket'
import store from './store'

// any actions we recieve with this name will have their payloads
// dispatched to the store as Flux Standard Actions
const clientMethods = [
  'setState'
]

clientMethods.forEach(methodName =>
  socket.on(methodName, payload => {
    store.dispatch({
      type: methodName,
      payload
    })
  })
)
