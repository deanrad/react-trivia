import {createAction, createReducer} from 'redux-act'
import Question from './question'

let skipClient = [payload => payload, _ => ({skipClient: true})]
export let advanceQuestion = createAction('ADVANCE_QUESTION', ...skipClient)
export let answerQuestion = createAction('ANSWER_QUESTION', ...skipClient)

export let initialRound = {question: null, responses: []}

export let Actions = {
  advanceQuestion,
  answerQuestion
}

export let Reducer = createReducer({
  [advanceQuestion]: (round, _) => ({...round, question: Question.nextQuestion(round.question)}),
  [answerQuestion]: (round, answer, meta) => {
    let {choice} = answer
    return {
      question: round.question,
      responses: [...round.responses, {choice, clientID: meta.clientID}]
    }
  }
}, initialRound);
