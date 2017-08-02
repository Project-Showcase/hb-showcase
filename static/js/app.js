import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

require('../stylesheets/app.scss');

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  rootEl
)

render()
store.subscribe(render)