import constants from '../constants'

var initialState = {
  sweepstakes: [],
  current: {}
}

export default (state = initialState, action) => {
  
  let updated = Object.assign({}, state)
  let sweepstakes = updated['sweepstakes']

	switch (action.type) {

    case constants.SWEEPSTAKE_CREATED:
      sweepstakes.push(action.data)
      updated['sweepstakes'] = sweepstakes
      updated['current'] = action.data
      return updated
      
    case constants.SWEEPSTAKES_RECEIVED:
      sweepstakes = action.data.data
      updated['sweepstakes'] = sweepstakes
      return updated

    case constants.SWEEPSTAKE_RECEIVED:
      sweepstakes.push(action.data)
      updated['sweepstakes'] = sweepstakes
      updated['current'] = action.data
      return updated

    case constants.SWEEPSTAKE_SELECTED:
      updated['current'] = action.data
      return updated

    case constants.SWEEPSTAKE_DELETED:
      sweepstakes.splice(action.index, 1)
      updated['sweepstakes'] = sweepstakes
      return updated

    case constants.SWEEPSTAKE_GENERATED:
      sweepstakes.splice(action.index, 1)
      sweepstakes.push(action.data)
      updated['sweepstakes'] = sweepstakes
      return updated

    case constants.MEMBER_ADDED:
      return updated

    case constants.FAILED_ADD_MEMBER:
      return updated

		default:
			return state
	}
}