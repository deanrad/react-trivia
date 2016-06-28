import store from './store'

export default {
  action: (action) => {
    console.log('action received: ', action)
    store.dispatch(action)
  }
}
