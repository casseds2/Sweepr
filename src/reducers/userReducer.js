import constants from '../constants'

var initialState = {
	currentUser: ''
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type) {

    case constants.CURRENT_USER_RECEIVED:
      console.log(JSON.stringify(action.data))
      updated['currentUser'] = action.data.data
			return updated

		default:
			return state
	}
}