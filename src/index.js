import store from './store'
import socketServer from './socketServer'
import startupActions from './startupActions'
import methods from './methods'
import statePublisher from './statePublisher'

// use a middleware to replay actions to all but the client who sent it

socketServer.on('connection', (socket) => {
  // give the state to newly connected clients
  let state = store.getState()
  console.log('new: ->', state)
  socket.emit('setState', state)

  // attach methods to socket.io actions from clients
  for (let name in methods) {
    let body = methods[name]
    socket.on(name, body)
  }


})

console.log('Store:', store.getState())
