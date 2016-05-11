import {createAction, createReducer} from 'redux-act'

let addPlayer = createAction('ADD_PLAYER')

export let Actions = {
  addPlayer
}

export let playerReducer = createReducer({
  [addPlayer]: (players, p) => [...players, p]
}, []);
