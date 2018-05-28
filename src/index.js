import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom' 
import App from './components/App'
import createHistory from 'history/createBrowserHistory'
import { Dashboard, Profile, CreateSweepstake, ViewAllSweepstakes } from './components/layout';

const history = createHistory()

const app = (
	<Provider store={store.configure(null)}>
    <BrowserRouter>
			<div>
				<Route exact path='/' component={Dashboard} />
				<Route path='/profile' component={Profile} />
        <Route path='/create' component={CreateSweepstake} />
        <Route path='/view/sweepstakes' component={ViewAllSweepstakes} />
			</div>
		</BrowserRouter>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))