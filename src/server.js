import Server from 'socket.io';

export function startServer(store) {
  const io = new Server().attach(8470);

  store.subscribe(
    () => io.emit('state', store.getState())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState());
    socket.on('action', (e) => {
        console.log('event received: ', e)
        store.dispatch(e)
        console.log(store.getState())
    });
  });

}
