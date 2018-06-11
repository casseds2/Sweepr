import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connect, Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'
import * as layouts from './components/layout'
import { PrivateRoute } from './components/containers'

const history = createHistory()

const store = createStore(
	connectRouter(history)(combineReducers(reducers)),
	compose(
		applyMiddleware(
			thunk,
			logger,
			routerMiddleware(history),
		),
	),
)

const app = (
	<Provider store={store}>
    <ConnectedRouter history={history}>
			<Switch>
				<Route exact path='/login' component={layouts.Login} />
				<Route exact path="/register" component={layouts.Register} />
				<PrivateRoute exact path='/' component={layouts.Dashboard} />
				<PrivateRoute exact path='/profile' component={layouts.ProfilePage} />
				<PrivateRoute exact path='/create' component={layouts.CreateSweepstake} />
				<PrivateRoute exact path='/sweepstakes' component={layouts.ViewAllSweepstakes} />
        <PrivateRoute exact path='/randomizer' component={layouts.RandomAssigner} />
        <PrivateRoute path='/sweepstake/:id' component={layouts.ViewSweepstake} />
			</Switch>
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))