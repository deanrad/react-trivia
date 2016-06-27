import path from 'path'
import http from 'http'
import express from 'express'
// host websockets and the static files from this port
let port = process.env.PORT || 8470

let app = express()
app.use(express.static(path.join(__dirname, '../client/dist')))
let httpServer = http.createServer(app)
httpServer.listen(port)

console.log(`Running on port ${port}`)

export default httpServer
