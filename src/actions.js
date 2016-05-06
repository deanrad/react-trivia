import {createAction} from 'redux-actions'

export let AddPlayer = (state, p) =>
  state.updateIn('players', players => players.push(p))
