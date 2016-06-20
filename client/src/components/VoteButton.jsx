import React from 'react'
import Actions from '../actions'
import getClientID from '../myID'

const displayStyle = ({responses, choice, myID}) => {
  let myResponse = responses.find(r => r.clientID == myID)
  let myChoice = myResponse && myResponse.choice
  let myChoiceConfirmed = myResponse && myResponse.acceptedAt

  // they havent answered
  if (!myResponse) return ''
  // this button isnt for their answer
  if (myChoice !== choice) return ''

  return myChoiceConfirmed ? 'accepted' : 'pending'
}

export default ({choice, question, responses}) => (
  <button
    disabled={responses.length > 0}
    className={displayStyle({choice, responses, myID: getClientID()})}
    key={choice}
    onClick={() => Actions.answerQuestion({choice, questionId: question.id})}
    >
    <h1>{choice}</h1>
  </button>
)
