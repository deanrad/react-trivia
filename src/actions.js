import {createAction} from 'redux-act'

import * as Player from './models/player'
import * as Game from './models/game'
import * as Round from './models/round'

export default {
  ...Player.Actions,
  ...Game.Actions,
  ...Round.Actions
}
