import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'

// https://github.com/gaearon/redux-devtools/issues/274, fixed in 1.4.*
const storeMaker = window.devToolsExtension ?
    window.devToolsExtension()(createStore) :
    createStore

const store = storeMaker(reducer)

window.store = store
export default store
