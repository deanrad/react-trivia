import {combineReducers} from 'redux'
import {playerReducer} from './players/index'

const defaultQuestion = {
  prompt: 'WTF?',
  choices: ['dunno', '42', 'QED', 'fckall']
}

export default combineReducers({
  question: (state) => state || defaultQuestion,
  players: playerReducer,
})
