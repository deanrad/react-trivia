import {expect} from 'chai'
import {AddPlayer} from '../src/actions'
import {examples} from '../doc/example'
import {Map, fromJS} from 'immutable'
import reducer from '../src/reducers/player'

describe('The Reducer', () => {

  it('initial state is that of an unstarted game awaiting players', () => {
    const nextState = reducer(undefined, {})
    expect(nextState).to.equal(fromJS(examples.gameStates.initial))
  })

  it('can take an ADD_PLAYER action', () => {
    const actions = [
      undefined,
      {
        type: 'ADD_PLAYER',
        payload: new Map(examples.gameStates.playersJoined.players[0])
      }
    ]
    const nextState = actions.reduce(reducer)
    expect(nextState).to.equal(fromJS(examples.gameStates.playersJoined))
  })
})
