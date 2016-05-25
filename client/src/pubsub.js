import io from 'socket.io-client'

export let setupPubSub = (wsUrl) => {
  console.log(`Making WebSockets connection to ${wsUrl}`)
  return io(wsUrl)
}
