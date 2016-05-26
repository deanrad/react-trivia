import {createStore, applyMiddleware} from 'redux'
import {assignAll} from 'redux-act'
import reducer from './reducer'
import Actions from './actions'
import {setupPubSub} from './pubsub'

console.debug('loaded store')

const wsPort = location.hostname === 'localhost' ? ':8470' : ''

// prod is 'http://react-trivia.herokuapp.com'
// local is http://localhost:8470
const wsUrl = location.protocol + '//' + location.hostname + wsPort

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
