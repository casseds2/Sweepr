import constants from '../constants'
import { APIManager, RandomAssigner } from '../utils'
import { push } from 'react-router-redux'

export default {

  createSweepstake: (params) => {
    return (dispatch) => {
      dispatch({
        type: constants.SWEEPSTAKE_CREATED,
        data: params
      })
      // dispatch({
      //   type: constants.CREATING_SWEEPSTAKE,
      //   status: 'loading'
      // })
      // APIManager.post('/api/sweepstake', params)
      // .then(data => {
      //   dispatch({
      //     type: constants.SWEEPSTAKE_CREATED,
      //     data: data
      //   })
      // })
      // .catch(err => {
      //   alert(err)
      //   dispatch({
      //     type: constants.SWEEPSTAKE_CREATED,
      //     data: null
      //   })
      // })
    }
  },

  generateSweepstake: (params) => {
    return (dispatch) => {
      dispatch({
        type: constants.GENERATING_SWEEPSTAKE,
        satus: 'loading'
      })
      RandomAssigner.randomizeGroups(params.groups, params.members)
      .then(data => {
        console.log('Data: ' + JSON.stringify(data))
        //Create Sweepstake in DB Here
        // dispatch({
        //   type: constants.SWEEPSTAKE_CREATED,
        //   data: data
        // })
        push('/')
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
