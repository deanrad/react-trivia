import {createAction} from 'redux-actions'

export let AddPlayer = (state, p) =>
  state.update('players', players => players.push(p))
