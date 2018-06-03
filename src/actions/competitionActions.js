import constants from '../constants'
import { WorldCupApi } from '../utils'

export default {

  fetchCompetition: (id) => {
    return (dispatch) => {
      dispatch({
        type: constants.FETCHING_COMPETITION,
        status: 'loading'
      })
      WorldCupApi.get('http://api.football-data.org/v1/competitions/' + id, null)
      .then(data => {
        dispatch({
          type: constants.FETCHED_COMPETITION,
          data: data
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.ERROR_FETCHING_COMPETITION,
          data: null
        })
      })
    }
  },
  fetchTeams: (id) => {
    return (dispatch) => {
      dispatch({
        type: constants.FETCHING_TEAMS,
        status: 'loading'
      })
      WorldCupApi.get('http://api.football-data.org/v1/competitions/' + id + '/teams', null)
      .then(data => {
        dispatch({
          type: constants.FETCHED_TEAMS,
          data: data,
          competitionID: id
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.ERROR_FETCHING_TEAMS,
          data: null
        })
      })
    }
  }
}
