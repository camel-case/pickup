import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'

import App from './public/components/app'
import rootReducer from './public/reducers/index.js'

import Login from './public/components/Login/Login'
import Home from './public/components/Home'

import * as auth from './public/actions/auth'


const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleWare(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

export {store}

 render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Login} />
          <Route path="/Home" component={Home} onEnter={auth.requireAuth}/>
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('app'))
