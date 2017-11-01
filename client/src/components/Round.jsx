import React from "react"
import VoteButton from "./VoteButton"

import getClientID from "../myID"

let myID = getClientID()

export default ({ question, responses, judged }) => {
  let { prompt, choices = [] } = question || {}
  let myResponse = responses.find(r => r.clientID == myID)
  return (
    <div>
      <div>Question: {prompt}</div>

      <div className="voting">
        {choices.map(choice =>
          VoteButton({ myID, choice, question, responses, judged })
        )}
      </div>

      {console.log({ question, responses })}
      {judged &&
        (question.answer !== myResponse.choice ? (
          <div className="answer">
            The Answer Was:<br /> {question.answer}{" "}
          </div>
        ) : (
          <div className="answer">
            Wow. You're both smart, AND good-looking!
          </div>
        ))}
    </div>
  )
}
