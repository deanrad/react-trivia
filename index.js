import makeStore from './src/makeStore'
import Server from 'socket.io'
import setupPubSub from './src/pubsub'
import Actions from './src/actions'

import http from 'http'
import express from 'express'

// host websockets and the static files from this port
let port = process.env.PORT || 8470

let app = express()
app.use(express.static(__dirname + '/client/dist/'))
let httpServer = http.createServer(app)
httpServer.listen(port)

console.log(`Running on port ${port}`)
//const io = new Server().attach(port)
const io = new Server(httpServer)

const store = makeStore()
console.log(store.getState())

setupPubSub(store, io)

// testing- play some actions

let initActions = [
  Actions.joinPlayer({name: 'Khaaaann!', clientId: '666'}),
  Actions.beginGame(),
  Actions.advanceQuestion()
]

initActions.map((action, idx) => (
  setTimeout(() => store.dispatch(action), 1000 + idx*1000)
))
