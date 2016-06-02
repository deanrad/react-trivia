import {assignAll} from 'redux-act'
import Actions from './actions'

export default (store) => assignAll(Actions, store)
