import constants from '../constants'
import { APIManager, RandomAssigner } from '../utils'
import { push } from 'connected-react-router'

export default {

  createSweepstake: (params) => {
    return (dispatch) => {
      APIManager.post('/api/sweepstake', params)
      .then(data => {
        dispatch({
          type: constants.SWEEPSTAKE_CREATED,
          data: data
        })
        push('/sweepstakes/' + data._id)
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

  generateSweepstake: (params) => {
    console.log('Params: ' + JSON.stringify(params))
    return (dispatch) => {
      dispatch({
        type: constants.GENERATING_SWEEPSTAKE,
        satus: 'loading'
      })
      RandomAssigner.randomizeGroups(params.groups, params.members) //FIx Function for Data Structure
      .then(data => {
        console.log('DATA: ' + JSON.stringify(data))
        params['generated'] = data
        console.log('Data: ' + JSON.stringify(params))
        //Create Sweepstake in DB Here
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

  fetchSweepstake: (id) => {
    return (dispatch) => {
      dispatch({
        type: constants.FETCHING_SWEEPSTAKE,
        status: 'loading'
      })
      APIManager.get('/api/sweepstake', {"id": id})
      .then(data => {
        dispatch({
          type: constants.SWEEPSTAKE_RECEIVED,
          data: data
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.SWEEPSTAKE_RECEIVED,
          data: null
        })
      })
    }
  },

  sweepstakeSelected: (sweepstake) => {
    return(dispatch) => {
      dispatch({
        type:constants.SWEEPSTAKE_SELECTED,
        data: sweepstake
      })
    }
  },

  addMember: (sweepstake, index, user) => {
    return(dispatch) => {
      APIManager.put('/api/sweepstake/' + sweepstake._id)
      .then(data => {
        dispatch({
          type: constants.MEMBER_ADDED,
          data: data,
          index: index
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constant.FAILED_ADD_MEMBER,
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
