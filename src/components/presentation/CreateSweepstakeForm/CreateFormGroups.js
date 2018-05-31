import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import DeleteButton from '@material-ui/icons/Delete'
import IconButton from 'material-ui/IconButton'
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  groupBox: {
    marginRight: 10
  }
}

class CreateFormGroups extends Component{

  render(){

    const { sortedTeams, selectedGroup, classes } = this.props

    let sortedTeamGroups = Object.values(sortedTeams).map((group, index) => {
      let paperElevation = (selectedGroup === index) ? 20 : 1
      let groupDisplay = group.map((team, index) => {
        return <h3 key={index}>{team.name}</h3>
      })
      return  <Grid onClick={this.props.onSelectGroup.bind(this, index)} className={classes.groupBox} key={index} item xs>
                <Paper elevation={paperElevation} >
                  <Grid container justify={'center'}>                    
                    <Grid item>
                      <Grid container justify={'center'} direction={'column'}>
                        <h3>Group {index + 1} <IconButton><DeleteButton onClick={this.props.onDeleteGroup.bind(this, index)}></DeleteButton></IconButton></h3>
                        <Grid item>
                          {groupDisplay}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
    })

    return(
      <Grid container alignItems={'center'} justify={'center'}>
        <Grid item xs>
          <Grid container justify={'space-between'}>
            {sortedTeamGroups}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CreateFormGroups)