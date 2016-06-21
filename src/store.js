import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import * as serverMiddleware from './serverMiddleware'

let middlewareStoreCreator = applyMiddleware(
  ...Object.values(serverMiddleware)
)(createStore)

export default middlewareStoreCreator(reducer)
