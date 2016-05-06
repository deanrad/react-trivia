import {handleActions} from 'redux-actions'

export let responseReducer = handleActions({
  'ADD_RESPONSE': (state, action) => {
    state.set('TODO', 'Implement')
  }
})
