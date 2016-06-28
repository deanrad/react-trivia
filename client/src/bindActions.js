import {assignAll} from 'redux-act'
import Actions from './actions'

export default (store) => {
  assignAll(Actions, [console.log.bind(console, 'Foo: '), store])
}
