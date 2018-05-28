import constants from '../constants'

var initialState = {
	sweepstakes: []
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type) {

    case constants.SWEEPSTAKE_CREATED:
      let sweepstake = action.data.data
      let sweepstakes = updated['sweepstakes']
      sweepstakes.push(sweepstake)
      updated['sweepstakes'] = sweepstakes
			return updated

		default:
			return state
	}
}