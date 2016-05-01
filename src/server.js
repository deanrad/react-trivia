import Server from 'socket.io';

export function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', (e) => {
        console.log('event received: ', e)
        store.dispatch(e)
        console.log(store.getState().toJS())
    });
  });

}
