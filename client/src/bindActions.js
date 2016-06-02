import {assignAll} from 'redux-act'
import Actions from './actions'
import store from './makeStore'
import {setState} from './pubsub'

/* assigning mutates them in place but to be nice we export them again */
assignAll(Actions, store)
setState.assignTo(store)

window.Store = store
window.Actions = Actions

export default Actions
