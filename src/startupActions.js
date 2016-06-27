import Actions from './actions'
import store from './store'

// XXX In the client, actions are bound, and not here - confusing.
let initActions = [
  Actions.joinPlayer({name: 'Khaaaann!', clientId: '666'}),
  Actions.beginGame(),
  Actions.advanceQuestion()
]

initActions.map((action, idx) => (
  setTimeout(() => store.dispatch(action), 1000 + idx*1000)
))
