import {createAction} from 'redux-act'
import * as Game from '../../src/models/game'
import * as Player from '../../src/models/player'
import * as Round from '../../src/models/round'

console.debug('loaded actions')
let setState = createAction('SET_STATE', state => state, meta => ({clientOnly: true}))

let actions = {
  setState,
  ...Game.Actions,
  ...Player.Actions,
  ...Round.Actions
}

export default actions
