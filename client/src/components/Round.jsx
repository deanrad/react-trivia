import React from 'react'
import VoteButton from './VoteButton'

export default ({question, responses}) => {
  let {prompt, choices=[]} = question || {}

  return (
  <div>
    <div>
      Question: {prompt}
    </div>

    <div className="voting">
      {choices.map(choice => VoteButton({choice, question, responses}))}
    </div>
  </div>)
}
