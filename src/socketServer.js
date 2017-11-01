import httpServer from "./httpServer"
import Server from "socket.io"

const socketServer = new Server(httpServer)

export default socketServer
