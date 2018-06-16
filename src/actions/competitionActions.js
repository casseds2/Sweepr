import constants from '../constants'
import { WorldCupApi } from '../utils'

export default {

  fetchFixtures: (id, matchDay) => {
    // console.log('ID: ' + JSON.stringify(id))
    // console.log('Matchday: ' + JSON.stringify(matchDay))
    return (dispatch) => {
      WorldCupApi.get('http://api.football-data.org/v1/competitions/' + id + '/fixtures', {matchday: matchDay})
      .then(data => {
        // console.log('FIXES:' + JSON.stringify(data))
        dispatch({
          type: constants.FETCHED_FIXTURES,
          data: data.fixtures,
          matchDay: matchDay
        })
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
        // console.log('WorldyData: ' + JSON.stringify(data))
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
