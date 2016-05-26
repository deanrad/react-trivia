# React-trivia

## Setup

Clone this project, then run `npm install`

## Running it

The websocket server, and the `express` server that serves
the files in `dist/` runs at `http://localhost:8470` when you run

```
> npm run
```

This is how it works in production.


For developing, the front end gets served and live-reloaded via webpack at `http://localhost:3120` when you run:

```
> npm run client
```

## Building the bundle
To update the files in `dist/`, as when ready to deploy

```
> webpack
```

Or to build, make a commit, and deploy the files (dont forget `git push` only pushes committed files!):

```
> npm run deploy
```

This will work when you have a heroku Node.js site set up
following [Heroku Node Websocket Setup](https://devcenter.heroku.com/articles/node-websockets#create-websocket-app)

## Questions
Open an issue to ask, or tweet me at @deaniusaur !
