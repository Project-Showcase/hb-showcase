import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Card from './js/components/Card';

require('../stylesheets/app.scss');

const store = createStore(
    reducer,
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