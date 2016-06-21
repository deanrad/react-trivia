import Actions from './actions'

export let timestampMiddleware = store => next => (action) => {
  if (action.type == Actions.answerQuestion.toString()) {
    action.payload.acceptedAt = new Date()
  }
  return next(action)
}
