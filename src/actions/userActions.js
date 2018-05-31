import constants from '../constants'
import { APIManager } from '../utils'

export default {
  fetchAllUsers: () => {
    return (dispatch) => {
      dispatch({
        type: constants.FETCHING_USERS,
        status: 'loading'
      })
      APIManager.get('/api/profile', null)
      .then(data => {
        dispatch({
          type: constants.USERS_RECEIVED,
          data: data
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.USERS_RECEIVED,
          data: null
        })
      })
    }
  }
}
