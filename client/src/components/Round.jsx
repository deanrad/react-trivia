import React from 'react'
import VoteButton from './VoteButton'

import getClientID from '../myID'

let myID = getClientID()

export default ({question, responses, judged}) => {
  let {prompt, choices=[]} = question || {}

  return (
  <div>
    <div>
      Question: {prompt}
    </div>

    <div className="voting">
      {choices.map(choice => VoteButton({myID, choice, question, responses, judged}))}
    </div>

    {judged && <div className="answer">The Answer Was:<br/> {question.answer} </div>}
  </div>)
}
