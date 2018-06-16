import React from 'react'
import { Grid, Typography, Snackbar, IconButton, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { competitionActions, appstateActions } from '../../actions'
import { GroupTable } from '../presentation'

class GroupTables extends React.Component{

  componentDidMount(){
    const { selectedCompetitionID, groupStandings } = this.props.competitions
    if(groupStandings[selectedCompetitionID] == null){
      this.props.fetchGroupStandings(selectedCompetitionID)
    }
  }

  render(){

    const { selectedCompetitionID, groupStandings } = this.props.competitions
    const { fixtureSnackbar } = this.props.appState

    let competitionGroups = (groupStandings[selectedCompetitionID] == null) ? [] : groupStandings[selectedCompetitionID]['standings']
    let content = Object.keys(competitionGroups).map((groupKey, index) => {
      let capitalized = groupKey.charAt(0).toUpperCase()
      let group = (groupStandings[selectedCompetitionID]['standings'][capitalized] == null) ? [] : groupStandings[selectedCompetitionID]['standings'][groupKey]
      return(
        <Grid key={index} item xs={6}>
          <Grid item xs style={{textAlign:'center'}}>
            <Grid container justify='center'>
              <Grid item xs={4}>
                <Typography variant='headline'>
                  Group {groupKey} <hr />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <GroupTable 
            group={group}
            letter={groupKey}
            key={index}
          />
        </Grid>
      )
    })

    return(
      <div>
        <Snackbar
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.props.toggleSnackbar}>
              Close
            </Button>
          ]}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={fixtureSnackbar}
          message="Matches in Progress Not Accounted For"
        />
        <Grid container justify='center'>
          {content}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    competitions: state.competitions,
    appState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => ({
  navigateToRegisterPage: (href) => dispatch(navigateTo('/register')),
  fetchGroupStandings: (id) => dispatch(competitionActions.fetchGroupStandings(id)),
  toggleSnackbar: () => dispatch(appstateActions.toggleFixtureSnackbar())
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupTables)