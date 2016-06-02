import React from 'react'
import Round from './Round'

require('../style.css')

export default ({game={}, round={}}) => (
  <div>
    <a href="#test">Open Test Harness</a>
    <h3>
        Game: {game.title}
        <i>({game.status})</i>
        <Round {...round}/>
    </h3>
  </div>
)
