import constants from '../constants'

var initialState = {
  sweepstakes: [],
  current: {},
  presentationMode: false
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
      updated['current'] = sweepstakes[0]
      return updated

    case constants.SWEEPSTAKE_RECEIVED:
      sweepstakes.push(action.data)
      updated['sweepstakes'] = sweepstakes
      updated['current'] = action.data
      return updated

    case constants.SWEEPSTAKE_SELECTED:
      updated['current'] = action.data
      let presentationMode = (action.presentationMode == null) ? false : action.presentationMode
      updated['presentationMode'] = presentationMode
      return updated

    case constants.SWEEPSTAKE_DELETED:
      sweepstakes.splice(action.index, 1)
      updated['sweepstakes'] = sweepstakes
      return updated

    case constants.SWEEPSTAKE_GENERATED:
      sweepstakes.splice(action.index, 1)
      sweepstakes.push(action.data)
      updated['sweepstakes'] = sweepstakesaction.
      updated['current'] = action.data
      updated['presentationMode'] = action.presentationMode
      return updated

    case constants.MEMBER_ADDED:
      return updated

    case constants.FAILED_ADD_MEMBER:
      return updated

		default:
			return state
	}
}