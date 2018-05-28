import constants from '../constants'
import { APIManager } from '../utils'
import { Sweepstake } from '../components/presentation';

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
  },

  fetchSweepstakes: () => {
    return (dispatch) => {
      dispatch({
        type: constants.FETCHING_SWEEPSTAKES,
        status: 'loading'
      })
      APIManager.get('/api/sweepstake', null)
      .then(data => {
        dispatch({
          type: constants.SWEEPSTAKES_RECEIVED,
          data: data
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.SWEEPSTAKES_RECEIVED,
          data: null
        })
      })
    }
  },

  deleteSweepstake: (sweepstake, index) => {
    return (dispatch) => {
      APIManager.delete('/api/sweepstake/' + sweepstake._id)
      .then(data => {
        dispatch({
          type: constants.SWEEPSTAKE_DELETED,
          index: index,
          data: data
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.SWEEPSTAKE_DELETED,
          data: null
        })
      })
    }
  }
}
