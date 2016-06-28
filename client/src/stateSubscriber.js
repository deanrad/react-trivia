import socket from './socket'
import store from './store'

const setStateMethod = 'setState'

socket.on(setStateMethod, (payload) => {
  store.dispatch({type: setStateMethod, payload})
})
