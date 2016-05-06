import {expect} from 'chai'
import {AddPlayer} from '../src/actions'

import reducer from '../src/reducers/player'

describe('The Reducer', () => {

  it('initial state is that of an unstarted game awaiting players', () => {
    const nextState = reducer(undefined, {})
    expect(nextState).to.equal(examples.gameStates.initial)
  })

  it('can take an ADD_PLAYER action', () => {
    const nextState = reducer(examples.gameStates.initial, AddPlayer({p: 1}))
    expect(nextState).to.deep.equal({})
  })
})
