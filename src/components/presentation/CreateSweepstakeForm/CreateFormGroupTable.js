import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import CreateFormGroups from './CreateFormGroups'
import CreateFormTeams from './CreateFormTeams'

class CreateFormGroupTable extends React.Component{

  render(){

    const { teams, selectedGroup, numGroups } = this.props

    let sortedTeams = {}
    for(var i = 0; i < numGroups+1; i++){
      var grouping =  teams.filter((team) => team.group == i)
      sortedTeams[i] = grouping
    }

    return(
      <Grid container>
        <Grid item xs={4}>
          <CreateFormTeams
            teams={teams}
            numGroup={numGroups}
          />
        </Grid>
        <Grid item xs={8}>
          <CreateFormGroups
            sortedTeams={sortedTeams}
            selectedGroup={selectedGroup}
            onSelectGroup={(index) => {this.props.onSelectGroup(index)}}
            onDeleteGroup={(index) => {this.props.onDeleteGroup(index)}}
          />
        </Grid>
      </Grid>
    )
  }
}

export default CreateFormGroupTable