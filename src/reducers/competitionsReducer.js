import constants from '../constants'

var initialState = {
  competitions: {},
  fixtures: {},
  teams: {},
  selectedCompetitionID: 467
}

export default (state = initialState, action) => {
  
  let updated = Object.assign({}, state)
  
	switch (action.type) {

    case constants.FETCHED_COMPETITION:
      let fetchedCompetition = action.data
      let competitionsMap = updated['competitions']
      let id = fetchedCompetition['id']
      competitionsMap[id] = fetchedCompetition
      updated['competitions'] = competitionsMap
      updated['selectedCompetitionID'] = id
      return updated
      
    case constants.FETCHED_FIXTURES:
      updated['fixtures'][action.matchDay] = action.data
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

		default:
			return state
	}
}