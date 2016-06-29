export default ({socket, store}) => {
  return (methodNames) => {
    methodNames.forEach(methodName =>
      socket.on(methodName, payload =>
        store.dispatch({
          type: methodName,
          payload
        }))
    )
  }
}
