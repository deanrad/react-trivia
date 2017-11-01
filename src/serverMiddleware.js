import Actions from "./actions"

export let answerQuestionMiddleware = store => next => action => {
  if (action.type !== Actions.answerQuestion.toString()) return next(action)

  let timestamp = new Date()
  action.payload.receivedAt = timestamp

  let state = store.getState()

  if (
    state.round.question.answer === action.payload.choice &&
    !state.round.responses.find(r => r.acceptedAt)
  ) {
    action.payload.acceptedAt = timestamp
  }

  return next(action)
}
