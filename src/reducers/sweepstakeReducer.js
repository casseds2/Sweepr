import constants from '../constants'

var initialState = {
	sweepstakes: []
}

export default (state = initialState, action) => {
  
  let updated = Object.assign({}, state)
  let sweepstakes = updated['sweepstakes']

	switch (action.type) {

    case constants.SWEEPSTAKE_CREATED:
      console.log('Data: ' + JSON.stringify(action.data))
      let sweepstake = action.data
      sweepstakes.push(sweepstake)
      updated['sweepstakes'] = sweepstakes
      return updated
      
    case constants.SWEEPSTAKES_RECEIVED:
      sweepstakes = action.data.data
      updated['sweepstakes'] = sweepstakes
      return updated

    case constants.SWEEPSTAKE_DELETED:
      sweepstakes.splice(action.index, 1)
      updated['sweepstakes'] = sweepstakes
      return updated  

		default:
			return state
	}
}