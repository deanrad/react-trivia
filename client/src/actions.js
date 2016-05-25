import {createAction} from 'redux-act'
import MyID from './myID'
import * as Game from '../../src/models/game'
import * as Player from '../../src/models/player'
import * as Round from '../../src/models/round'

console.debug('loaded actions')
let setMyID = MyID.action
let setState = createAction('SET_STATE', state => state, meta => ({clientOnly: true}))

let actions = {
  setMyID,
  setState,
  ...Game.Actions,
  ...Player.Actions,
  ...Round.Actions
}

export default actions
