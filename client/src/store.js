import {createStore, applyMiddleware} from 'redux'
import {assignAll} from 'redux-act'
import reducer from './reducer'
import Actions from './actions'
import {setupPubSub} from './pubsub'

console.debug('loaded store')

//const wsUrl = 'http://react-trivia.herokuapp.com'
const wsUrl = location.protocol + '//' + `${location.hostname}:8470`

const {socket, middleware} = setupPubSub(wsUrl)

const createStoreWithMiddleware = applyMiddleware(
  middleware
)(createStore)


const storeCreator = createStoreWithMiddleware

// https://github.com/gaearon/redux-devtools/issues/274, fixed in 1.4.*
// const storeCreator = window.devToolsExtension ?
//     window.devToolsExtension()(createStoreWithMiddleware) :
//     createStoreWithMiddleware

const store = storeCreator(reducer)
assignAll(Actions, store)
// event to dispatch when the server has an update for us
socket.on('state', Actions.setState)

export default store
