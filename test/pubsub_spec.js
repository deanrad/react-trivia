import td from 'testdouble'
import publisher from '../src/pubsub'
import {expect} from 'chai'
import makeStore from '../src/makeStore'
const store = makeStore()

import Server from 'socket.io'

let sinon = require('sinon')
let fn = x => x

describe.skip('Publishing', () => {
  it('should emit state events on each store change', () => {
    // Arrange:
    // 1 set up expectations of socket
    let socket = {emit: fn, on: fn}
    let mocket = sinon.mock(socket)
    mocket.expects('emit').withArgs('state')

    // 2 stub implementation to ensure we get called
    let store = sinon.stub({getState: fn, subscribe: fn})
    let io = {on: sinon.stub().yields(socket)}

    publisher(store, io)

    //
    mocket.verify()
  })
})
