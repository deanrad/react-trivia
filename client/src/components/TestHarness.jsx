import React from 'react'
import store from '../store'
import Actions from '../actions'

store.subscribe(() => {
  if(! document.location.hash.includes('test')) return
  document.getElementById('stateJSON').textContent = JSON.stringify(store.getState(), null, 2)
})

export default (props) => (
  <div>
    <h2>Action Triggers</h2>
    <hr/>
    <button onClick={() => Actions.judgeQuestion()}>Judge Question</button>
     <hr/>
    <button onClick={() => Actions.advanceQuestion()}>Advance Question</button>
     <hr/>
     <p/>
        { /* this is bad form in React, but the dom id here is to allow updates outside of props */ }
     <textarea id="stateJSON" style={{fontSize: '9pt'}} rows="25" cols="80"></textarea>
  </div>
)
