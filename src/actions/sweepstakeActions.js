import constants from '../constants'
import { APIManager, RandomAssigner } from '../utils'
import { navigateTo } from '../actions'

export default {

  createSweepstake: (params) => {
    return (dispatch) => {
      APIManager.post('/api/sweepstake', params)
      .then(data => {
        dispatch({
          type: constants.SWEEPSTAKE_CREATED,
          data: data.data
        })
        dispatch(navigateTo('/sweepstake/' + data.data._id))
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

  generateSweepstake: (sweepstake, index) => {
    return (dispatch) => {
      dispatch({
        type: constants.GENERATING_SWEEPSTAKE,
        satus: 'loading'
      })
      RandomAssigner.randomizeGroups(sweepstake.groups, sweepstake.members) //FIx Function for Data Structure
      .then(data => {
        sweepstake['sweepstake'] = data
        sweepstake['active'] = !sweepstake.active
        APIManager.put('/api/sweepstake/' + sweepstake._id, sweepstake)
        .then(data => {
          dispatch(navigateTo('/sweepstake/' + sweepstake._id))
          dispatch({
            type: constants.SWEEPSTAKE_GENERATED,
            data: sweepstake,
            index: index,
            presentationMode: true
          })
          dispatch(navigateTo ('/sweepstake/' + sweepstake._id))
        })
        .catch(err => {
          dispatch({
            type: constants.SWEEPSTAKE_GENERATED,
            data: null
          })
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

  fetchSweepstake: (id) => {
    return (dispatch) => {
      dispatch({
        type: constants.FETCHING_SWEEPSTAKE,
        status: 'loading'
      })
      APIManager.get('/api/sweepstake/' + id)
      .then(data => {
        dispatch({
          type: constants.SWEEPSTAKE_RECEIVED,
          data: data.data
        })
      })
      .catch(err => {
        alert('Could Not Find Sweepstake!')
        dispatch(navigateTo('/'))
        dispatch({
          type: constants.SWEEPSTAKE_RECEIVED,
          data: null
        })
      })
    }
  },

  sweepstakeSelected: (sweepstake, presentMode) => {
    return(dispatch) => {
      dispatch(navigateTo ('/sweepstake/' + sweepstake._id))
      dispatch({
        type:constants.SWEEPSTAKE_SELECTED,
        data: sweepstake,
        presentationMode: presentMode
      })
    }
  },

  addMember: (id, members, index) => {
    console.log('Members: ' + JSON.stringify(members))
    return(dispatch) => {
      APIManager.put('/api/sweepstake/' + id, {members: members})
      .then(data => {
        dispatch(navigateTo ('/'))
        dispatch({
          type: constants.MEMBER_ADDED,
          data: data,
          index: index
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.FAILED_ADD_MEMBER,
          data: null
        })
      })
    }
  },

  deleteSweepstake: (id, index) => {
    return (dispatch) => {
      APIManager.delete('/api/sweepstake/' + id)
      .then(data => {
        dispatch(navigateTo ('/'))
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
  },
}
