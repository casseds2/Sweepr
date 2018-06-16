import constants from '../constants'

const initialState = {
	fixtureSnackbar: true
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

	switch (action.type) {

		case constants.FIXTURE_SNACKBAR_TOGGLED:
      let status = updated['fixtureSnackbar']
      status = !status
      updated['fixtureSnackbar'] = status
      return updated

		default:
			return state
	}
}