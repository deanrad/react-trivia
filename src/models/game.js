import {createAction, createReducer} from 'redux-act'

export let beginGame = createAction('BEGIN_GAME')
export let endGame   = createAction('END_GAME')

const initialGame = {
  title: 'React Trivia Night Game 1',
  status: 'Waiting for players'
}

export let Actions = {
  beginGame,
  endGame
}

export let Reducer = createReducer({
  [beginGame]: (game, _) => ({...game, status: 'Game On!'}),
  [endGame]: (game, _) => ({...game, status: 'Game Over :('})
}, initialGame)

