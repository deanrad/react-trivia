import {createAction, createReducer} from 'redux-act'

let joinPlayer = createAction('JOIN_PLAYER')

export let Actions = {
  joinPlayer
}

export let Reducer = createReducer({
  [joinPlayer]: (players, p) => [...players, p]
}, []);
