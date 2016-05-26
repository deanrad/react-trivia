// TODO keep questions and answers from going to the client
import questions from '../../react-trivia-questions'

export default class Question {
  static nextQuestion(current) {
    let {prompt} = current || {}
    let idx = questions.findIndex(q => q.prompt==prompt)
    let nextIdx = idx + 1
    return questions[nextIdx]
  }
}
