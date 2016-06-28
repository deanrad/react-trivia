import store from './store'
import socketServer from './socketServer'
import startupActions from './startupActions'
import methods from './methods'

// use a middleware to replay actions to all but the client who sent it

socketServer.on('connection', (socket) => {
  // give the state to newly connected clients
  console.log('new connection')
  socket.emit('state', store.getState())

  // attach methods to socket.io actions from clients
  for (let name in methods) {
    let body = methods[name]
    socket.on(name, body)
  }


})

console.log('Store:', store.getState())
