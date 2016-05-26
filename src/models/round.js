import {createAction, createReducer} from 'redux-act'
import Question from './question'

let skipClient = [payload => payload, _ => ({skipClient: true})]
export let advanceQuestion = createAction('ADVANCE_QUESTION', ...skipClient)

export let initialRound = {question: null, responses: null}

export let Actions = {
  advanceQuestion
}

export let Reducer = createReducer({
  [advanceQuestion]: (round, _) => ({...round, question: Question.nextQuestion(round.question)})
}, initialRound);
