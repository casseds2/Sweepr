import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import DeleteButton from '@material-ui/icons/Delete'
import IconButton from 'material-ui/IconButton'
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  groupBox: {
    marginRight: 10
  },
  nameDisplay: {
    textAlign: 'center',
    marginBotom: 10
  }
}

class CreateFormGroups extends Component{

  render(){

    const { groups, selectedGroup, classes } = this.props

    return(
      <Grid container alignItems={'center'} justify={'center'}>
        <Grid item xs>
          <Grid container justify={'space-between'}>
            {Object.keys(groups).map((groupKey, index) => {
              let paperElevation = (selectedGroup === index) ? 20 : 1
              let backgroundColor = (selectedGroup === index) ? '#efefefef' : '#ffffffff'
              let teams = groups[groupKey]
              let content = teams.map((team, index) => {
                return  <Grid item key={index}>
                          <Grid container justify={'center'}>
                            <Grid item xs={12}>
                              <Paper className={classes.nameDisplay}>
                                {team.name}
                              </Paper>
                            </Grid>
                          </Grid>
                        </Grid>
              })
              return  <Grid className={classes.groupBox} key={index} item xs>
                        <Paper style={{backgroundColor:backgroundColor}} elevation={paperElevation} onClick={() => this.props.onSelectGroup(index)}>
                          <Grid container alignContent={'center'} justify={'center'}>                    
                            <Grid item xs>
                              <Grid container justify={'center'}>
                                <Grid item xs>
                                  <h5>Group {index+1}<IconButton><DeleteButton></DeleteButton></IconButton></h5>
                                </Grid>
                              </Grid>
                              <Grid container justify={'center'}>
                                <Grid item xs>
                                  {content}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CreateFormGroups)