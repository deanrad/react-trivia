export default (store, io) => {
  // emit state updates whenever the store changes
  store.subscribe(() => {
    // TODO make a middleware to broadcast actions instead
    var state = store.getState()
    io.emit('state', state)
    console.log('broadcast', state)
  })

  // use a middleware to replay actions to all but the client who sent it

  io.on('connection', (socket) => {
    // give the state to newly connected clients
    console.log('new connection')
    socket.emit('state', store.getState())

    // accept actions from clients
    socket.on('action', (e) => {
      console.log('event received: ', e)
      store.dispatch(e)
    })
  })
}

