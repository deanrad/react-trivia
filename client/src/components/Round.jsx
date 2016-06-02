import React from 'react'
import Actions from '../actions'

export default ({question, responses}) => {
  let {id, prompt, choices=[]} = question || {}

  return (<div className="voting">
      <div>
        Question: {prompt}
      </div>
      <div>
      {choices.map(choice =>
        <button
          key={choice}
          disabled={true}
          onClick={() => Actions.answerQuestion({choice, questionId: id})}
          >
          <h1>{choice}</h1>
        </button>
      )}
      </div>
    </div>)
}
