import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import Card from './components/Card';

require('../stylesheets/app.scss');

const store = createStore(
    applyMiddleware(
        thunkMiddleware,
    )
)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Card />,
  rootEl
)

render()
store.subscribe(render)