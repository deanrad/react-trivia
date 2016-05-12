import makeStore from './src/makeStore'
import setupPubSub from './src/pubsub'

const store = makeStore()

console.log(store.getState())

setupPubSub(store)
