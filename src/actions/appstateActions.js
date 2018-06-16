import constants from '../constants'

export default {

  toggleFixtureSnackbar: () => {
    return (dispatch) => {
      dispatch({
        type: constants.FIXTURE_SNACKBAR_TOGGLED
      })
    }
  }
}
