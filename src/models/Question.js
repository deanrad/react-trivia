export default class Question {
  static nextQuestion(current) {
    return {
      prompt: 'Wha?',
      choices: ['uh huh', 'no way']
    }
  }
}
