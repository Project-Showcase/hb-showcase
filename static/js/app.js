import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import Card from './components/Card';
import reducer from './reducers';

require('../stylesheets/app.scss');

const store = createStore(
  reducer,
  applyMiddleware(
      thunkMiddleware,
  )
)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <CardSet /> 
  </Provider>,
  rootEl
)

render()
store.subscribe(render)