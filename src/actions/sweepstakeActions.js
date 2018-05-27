import constants from '../constants'
import { APIManager } from '../utils'

export default {

  createSweepstake: (params) => {
    return (dispatch) => {
      dispatch({
        type: constants.CREATING_SWEEPSTAKE,
        status: 'loading'
      })
      APIManager.post('/api/sweepstake', params)
      .then(data => {
        dispatch({
          type: constants.SWEEPSTAKE_CREATED,
          data: data
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.SWEEPSTAKE_CREATED,
          data: null
        })
      })
    }
  }
}
