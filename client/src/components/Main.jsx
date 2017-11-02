import React from 'react'
import Round from './Round'

require('../style.css')

export default ({game={}, round={}}) => (
  <div>
    <a href="#test">Open Test Harness</a>
    <div id="game_title">
	    <span>
	        <b>{game.title}</b> <br/>
	        <i id="game_status">({game.status})</i>   
	    </span>
    </div>
    <span id="game_round">
    <br/>
    <Round {...round}/>
    </span> 
  </div>
)
