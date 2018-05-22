import React from 'react'
import ReactDOMServer from 'react-dom/server'
import ServerEntry from './ServerEntry'

export default (initialState, component) => {
	const app = React.createElement(component)
	const provider = React.createElement(ServerEntry, {component:app, store:initialState})
	
	return {
		react: ReactDOMServer.renderToString(provider),
		initial: JSON.stringify(initialState.getState())
	}

}
