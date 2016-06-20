import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import {answerQuestion} from './models/round'

let timestampMiddleware = store => next => (action) => {
  if (action.type == answerQuestion.toString()) {
    action.payload.acceptedAt = new Date()
  }
  return next(action)
}

let middlewareStoreCreator = applyMiddleware(
  timestampMiddleware
)(createStore)

export default middlewareStoreCreator(reducer)
