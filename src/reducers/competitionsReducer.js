import constants from '../constants'

var initialState = {
  competitions: {},
  fixtures: {},
  teams: {},
  teamSweepstakePoints: {},
  groupStandings: {},
  selectedCompetitionID: 467
}

export default (state = initialState, action) => {
  
  let updated = Object.assign({}, state)
  let id = state.selectedCompetitionID
  
	switch (action.type) {

    case constants.POINTS_CALCULATED:
      updated['teamSweepstakePoints'][id] = action.data
      return updated

    case constants.FETCHED_COMPETITION:
      let fetchedCompetition = action.data
      let competitionsMap = updated['competitions']
      id = fetchedCompetition['id']
      competitionsMap[id] = fetchedCompetition
      updated['competitions'] = competitionsMap
      updated['selectedCompetitionID'] = id
      return updated
      
    case constants.FETCHED_FIXTURES:
      updated['fixtures'][id] = action.data
      return updated

    case constants.FETCHING_COMPETITION:
      return updated

    case constants.ERROR_FETCHING_COMPETITION:
      return updated  

    case constants.FETCHED_TEAMS: 
      let fetchedTeams = action.data.teams
      let teamsMap = updated['teams']
      teamsMap[action.competitionID] = fetchedTeams
      updated['teams'] = teamsMap
      return updated
    
    case constants.FETCHING_TEAMS:
      return updated

    case constants.ERROR_FETCHING_TEAMS:
      return updated

    case constants.FETCHING_GROUP_STANDINGS:
      return updated
    
    case constants.FETCHED_GROUP_STANDINGS:
      let groupStandings = updated['groupStandings']
      id = action.competitionID
      groupStandings[id] = action.data
      updated['groupStandings'] = groupStandings
      return updated

    case constants.ERROR_FETCHING_GROUP_STANDINGS:
      return updated

		default:
			return state
	}
}