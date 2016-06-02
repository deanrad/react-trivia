import {setState} from './pubsub'
import {createAction} from 'redux-act'
import * as Game from '../../src/models/game'
import * as Player from '../../src/models/player'
import * as Round from '../../src/models/round'

let actions = {
  ...Game.Actions,
  ...Player.Actions,
  ...Round.Actions,
  setState
}

export default actions
