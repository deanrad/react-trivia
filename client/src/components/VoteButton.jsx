import React from "react"
import Actions from "../actions"

const displayStyle = ({ choice, myID, question, responses, judged }) => {
  let myResponse = responses.find(r => r.clientID == myID)
  let myChoice = myResponse && myResponse.choice
  let myChoiceConfirmed = myResponse && myResponse.acceptedAt
  let myChoiceReceived = myResponse && myResponse.receivedAt

  // they havent answered
  if (!myResponse) return ""
  // this button isnt for their answer
  if (myChoice !== choice) return ""

  if (!myChoiceReceived) return "pending"
  if (!judged) return "pending"

  return myChoiceConfirmed ? "accepted" : "incorrect"
}

export default ({ choice, question, responses, judged, myID }) => (
  <button
    disabled={judged || responses.filter(r => r.clientID == myID).length > 0}
    className={displayStyle({ choice, question, responses, judged, myID })}
    key={choice}
    onClick={() => Actions.answerQuestion({ choice, questionId: question.id })}
  >
    <h1>{choice}</h1>
  </button>
)
