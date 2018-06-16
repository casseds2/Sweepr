import constants from '../constants'
import { WorldCupApi, PointsCalculator } from '../utils'
import { navigateTo } from '../actions'

const calculateSuccess = (data) => ({
  type: constants.POINTS_CALCULATED,
  data: data
})

export function calculatePoints(fixtures){
  return (dispatch) => {
    PointsCalculator.calculate(fixtures)
    .then(data => {
      return (dispatch(calculateSuccess(data)))
    })
    .catch(err => {
      alert(err)
    })
  }
}

export default {

  fetchFixtures: (id, matchDay) => {
    return (dispatch) => {
      WorldCupApi.get('http://api.football-data.org/v1/competitions/' + id + '/fixtures', matchDay)
      .then(data => {
        dispatch({
          type: constants.FETCHED_FIXTURES,
          data: data.fixtures,
          matchDay: matchDay
        })
        dispatch(calculatePoints(data.fixtures))
        return data
      })
      .catch(err => {
        alert('Could Not Find Fixtures!')
        dispatch(navigateTo('/'))
      })
    }
  },
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
  },
  fetchGroupStandings: (id) => {
    return(dispatch) => {
      dispatch({
        type: constants.FETCHING_GROUP_STANDINGS,
        status: 'loading'
      })
      WorldCupApi.get('http://api.football-data.org/v1/competitions/' + id + '/leagueTable', null)
      .then(data => {
        dispatch({
          type: constants.FETCHED_GROUP_STANDINGS,
          data: data,
          competitionID: id
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.ERROR_FETCHING_GROUP_STANDINGS,
          data: null
        })
      })
    }
  }
}
