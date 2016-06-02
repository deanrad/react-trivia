import path from 'path'
import http from 'http'
import express from 'express'
import Server from 'socket.io'

import store from './store'
import setupPubSub from './pubsub'
import Actions from './actions'


// host websockets and the static files from this port
let port = process.env.PORT || 8470

let app = express()
app.use(express.static(path.join(__dirname, '../client/dist')))
let httpServer = http.createServer(app)
httpServer.listen(port)

console.log(`Running on port ${port}`)

const io = new Server(httpServer)
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
