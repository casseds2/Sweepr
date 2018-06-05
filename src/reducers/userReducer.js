import constants from '../constants'

var initialState = {
	allUsers: []
}

export default (state = initialState, action) => {
  
  let updated = Object.assign({}, state)

	switch (action.type) {
      
    case constants.FETCHING_USERS:
      return updated

    case constants.USERS_RECEIVED:
      let users = action.data.data
      updated['allUsers'] = users
      return updated

		default:
			return state
	}
}