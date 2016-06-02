import React from 'react'
import Actions from '../actions'

export default ({question, responses}) => {
  let {id, prompt, choices=[]} = question || {}

  return (
  <div>
    <div>
      Question: {prompt}
    </div>

    <div className="voting">
      {choices.map(choice =>
        <button
          key={choice}
          onClick={() => Actions.answerQuestion({choice, questionId: id})}
          >
          <h1>{choice}</h1>
        </button>
      )}
    </div>
  </div>)
}
