import {createAction, createReducer} from 'redux-act'

let addPlayer = createAction('JOIN_PLAYER')

export let Actions = {
  addPlayer
}

export let Reducer = createReducer({
  [addPlayer]: (players, p) => [...players, p]
}, []);
