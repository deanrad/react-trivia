import makeStore from './src/makeStore'
import Server from 'socket.io'
import setupPubSub from './src/pubsub'
import Actions from './src/actions'

const store = makeStore()
console.log(store.getState())

console.log('Running on port 8470')
const io = new Server().attach(8470)

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
