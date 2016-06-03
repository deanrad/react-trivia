let identity = payload => payload

// to be used createAction('FOO', ...skipClient)

// declares this action to not need to be applied to client
export let skipClient = [identity, (_) => ({skipClient: true})]

// declares this action as not being replicated to server
export let clientOnly = [identity, (_) => ({clientOnly: true})]
