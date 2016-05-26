import {createAction, createReducer} from 'redux-act'
import Question from './question'

export let advanceQuestion = createAction('ADVANCE_QUESTION')

export let initialRound = {question: null, responses: null}

export let Actions = {
  advanceQuestion
}

export let Reducer = createReducer({
  [advanceQuestion]: (round, _) => ({...round, question: Question.nextQuestion(round.question)})
}, initialRound);
