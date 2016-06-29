import socket from './socket'
import store from './store'
import autoDispatchSocketEvents from './autoDispatchSocketEvents'

// any actions we recieve with this name will have their payloads
// dispatched to the store as Flux Standard Actions
const clientMethods = [
  'setState'
]

autoDispatchSocketEvents({socket, store})(clientMethods)
