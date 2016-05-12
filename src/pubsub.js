import Server from 'socket.io'

console.log('Running on port 8470')
const io = new Server().attach(8470)

export default (store) => {
  // emit state updates whenever the store changes
  store.subscribe(() => {
    var state = store.getState()
    io.emit('state', state)
    console.log(state)
  })

  io.on('connection', (socket) => {
    // give the state to newly connected clients
    socket.emit('state', store.getState())

    // accept actions from clients
    socket.on('action', (e) => {
      console.log('event received: ', e)
      store.dispatch(e)
    })
  })
}

