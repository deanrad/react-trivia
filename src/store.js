import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import * as serverMiddleware from './serverMiddleware'
import socketServer from './socketServer'

let middlewareStoreCreator = applyMiddleware(
  ...Object.values(serverMiddleware)
)(createStore)

let store = middlewareStoreCreator(reducer)

store.subscribe(() => {
  socketServer.emit('state', store.getState())
})

export default store
