import makeStore from './src/makeStore'
import Server from 'socket.io'
import setupPubSub from './src/pubsub'
import Actions from './src/actions'

const store = makeStore()
console.log(store.getState())

let port = process.env.PORT || 8470
console.log(`Running on port ${port}`)
const io = new Server().attach(port)

setupPubSub(store, io)

// testing- play some actions

let initActions = [
  Actions.addPlayer({name: 'Khaaaann!', clientId: '666'}),
  Actions.beginGame(),
  Actions.advanceQuestion()
]

initActions.map((action, idx) => (
  setTimeout(() => store.dispatch(action), 1000 + idx*1000)
))
