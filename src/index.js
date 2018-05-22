import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import App from './components/App'

const app = (
	<Provider store={store.configure(null)}>
		<App />
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))