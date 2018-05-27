import constants from '../constants'

var initialState = {
	sweepstakes: []
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type) {

    case constants.SWEEPSTAKE_CREATED:
      let updated = Object.assign([], this.state)
      updated['sweepstakes'] = action.data.data
			return updated

		default:
			return state
	}
}