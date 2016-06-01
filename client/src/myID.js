import uuid from 'uuid'

const localStorageKey = 'ReactTrivia-clientId'

export default function getClientId() {
  let id = localStorage.getItem(localStorageKey)
  if (!id) {
    id = uuid.v4()
    localStorage.setItem(localStorageKey, id)
  }
  return id
}
