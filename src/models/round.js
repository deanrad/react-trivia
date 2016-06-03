import {createAction, createReducer} from 'redux-act'
import Question from './question'
import {skipClient} from '../actionMeta'

export let advanceQuestion = createAction('ADVANCE_QUESTION', ...skipClient)
export let answerQuestion = createAction('ANSWER_QUESTION', ...skipClient)

export let initialRound = {question: null, responses: []}

export let Actions = {
  advanceQuestion,
  answerQuestion
}

export let Reducer = createReducer({
  [advanceQuestion]: (round, _) => ({
    question: Question.nextQuestion(round.question),
    responses: []
  }),
  [answerQuestion]: (round, answer, meta) => {
    let response = {...answer, clientID: meta.clientID}
    return {
      question: round.question,
      responses: [...round.responses, response]
    }
  }
}, initialRound)
