import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'

const createStoreWithMiddleware = createStore

const storeCreator = createStoreWithMiddleware
const store = storeCreator(reducer)

// https://github.com/gaearon/redux-devtools/issues/274, fixed in 1.4.*
// const factory = window.devToolsExtension ?
//     window.devToolsExtension()(createStoreWithMiddleware) :
//     createStoreWithMiddleware

export default store
