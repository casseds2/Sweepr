import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer, sweepstakeReducer } from '../reducers'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

var store
const history = createHistory()
const reactRouterRedux = routerMiddleware(history)

export default {

	configure: (initialState) => {
		
		const reducers = combineReducers({
      user: userReducer,
      sweepstake: sweepstakeReducer,
      router: routerReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)

			return store
		}

		store = createStore(
		    reducers,
        applyMiddleware(thunk, reactRouterRedux)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
