import constants from '../constants'

var initialState = {
	allUsers: []
}

export default (state = initialState, action) => {
  
  let updated = Object.assign({}, state)
  let allUsers = updated['allUsers']

	switch (action.type) {

    case constants.SWEEPSTAKE_CREATED:
      let sweepstake = action.data.data
      sweepstakes.push(sweepstake)
      updated['sweepstakes'] = sweepstakes
      return updated
      
    case constants.FETCHING_USERS:
      console.log('Fetching Users...')
      return updated

    case constants.USERS_RECEIVED:
      let users = action.data.data
      allUsers.push(users)
      updated['allUsers'] = allUsers
      return updated

		default:
			return state
	}
}