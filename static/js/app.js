import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'


require('../stylesheets/app.scss');

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
    )
)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  rootEl
)

render()
store.subscribe(render)