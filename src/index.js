import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'
import * as layouts from './components/layout'
import { PrivateRoute } from './components/containers'

const history = createHistory()
const reactRouterRedux = routerMiddleware(history)

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer,
	}),
	applyMiddleware(thunk, logger, reactRouterRedux)
)

const app = (
	<Provider store={store}>
    <ConnectedRouter history={history}>
			<Switch>
				<Route exact path='/login' component={layouts.Login} />
				<PrivateRoute exact path='/' component={layouts.Dashboard} />
				<PrivateRoute exact path='/profile' component={layouts.ProfilePage} />
				<PrivateRoute exact path='/create' component={layouts.CreateSweepstake} />
				<PrivateRoute exact path='/sweepstakes' component={layouts.ViewAllSweepstakes} />
        <PrivateRoute exact path='/randomizer' component={layouts.RandomAssigner} />
			</Switch>
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))