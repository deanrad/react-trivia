import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'

// https://github.com/gaearon/redux-devtools/issues/274, fixed in 1.4.*
// const storeCreator = window.devToolsExtension ?
//     window.devToolsExtension()(createStoreWithMiddleware) :
//     createStoreWithMiddleware

const store = createStore(reducer)

window.store = store
export default store
