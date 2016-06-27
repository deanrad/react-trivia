import store from './store'
import socketServer from './socketServer'
import startupActions from './startupActions'

// use a middleware to replay actions to all but the client who sent it

socketServer.on('connection', (socket) => {
  // give the state to newly connected clients
  console.log('new connection')
  socket.emit('state', store.getState())

  // accept actions from clients
  socket.on('action', (e) => {
    console.log('event received: ', e)
    store.dispatch(e)
  })
})

console.log('Store:', store.getState())
