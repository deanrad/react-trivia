import {createAction, createReducer} from 'redux-act'

export let beginGame = createAction('BEGIN_GAME')

const initialGame = {
  title: 'React Trivia Night Game 1',
  status: 'Waiting for players'
}

export let Actions = {
  beginGame
}

export let Reducer = createReducer({
  [beginGame]: (game, _) => ({...game, status: 'Game On!'})
}, initialGame);

