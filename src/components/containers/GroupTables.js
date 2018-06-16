import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import { competitionActions } from '../../actions'
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

    let competitionGroups = (groupStandings[selectedCompetitionID] == null) ? [] : groupStandings[selectedCompetitionID]['standings']
    let content = Object.keys(competitionGroups).map((groupKey, index) => {
      let capitalized = groupKey.charAt(0).toUpperCase()
      let group = (groupStandings[selectedCompetitionID]['standings'][capitalized] == null) ? [] : groupStandings[selectedCompetitionID]['standings'][groupKey]
      return(
        <Grid key={index} item xs={6}>
          <Grid item xs style={{textAlign:'center', padding:10}}>
            <Typography variant='headline'>
              Group {groupKey}
            </Typography>
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
      <Grid container justify='center'>
        {content}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    competitions: state.competitions
  }
}

const mapDispatchToProps = (dispatch) => ({
  navigateToRegisterPage: (href) => dispatch(navigateTo('/register')),
  fetchGroupStandings: (id) => dispatch(competitionActions.fetchGroupStandings(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupTables)