import socketServer from "./socketServer"
import store from "./store"

export const setStateMethod = "setState"

store.subscribe(() => {
  let state = store.getState()
  console.log("=>", state)
  socketServer.emit(setStateMethod, state)
})
