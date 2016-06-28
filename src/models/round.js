import {createAction, createReducer} from 'redux-act'
import Question from './question'
import {skipClient} from '../actionMeta'

export let answerQuestion = createAction('ANSWER_QUESTION')
export let judgeQuestion = createAction('JUDGE_QUESTION', ...skipClient)
export let advanceQuestion = createAction('ADVANCE_QUESTION', ...skipClient)

export let initialRound = {question: null, responses: []}

export let Actions = {
  answerQuestion,
  judgeQuestion,
  advanceQuestion
}

export let Reducer = createReducer({
  [answerQuestion]: (round, answer, meta) => {
    let response = {...answer, clientID: meta.clientID}
    return {
      question: round.question,
      responses: [...round.responses, response]
    }
  },
  [judgeQuestion]: (round, _) => {
    return {
      question: round.question,
      responses: round.responses,
      judged: true
    }
  },
  [advanceQuestion]: (round, _) => ({
    question: Question.nextQuestion(round.question),
    responses: []
  })
}, initialRound)
