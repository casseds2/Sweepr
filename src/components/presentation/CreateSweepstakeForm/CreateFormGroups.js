import React, { Component } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import DeleteButton from '@material-ui/icons/Delete'
import IconButton from 'material-ui/IconButton'
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  groupBox: {
    marginRight: 10
  },
  nameDisplay: {
    textAlign: 'center',
    marginTop: 15,
    padding: 15,
    backgroundColor: '#f9fbff'
  },
  groupName: {
    textAlign:'center', 
    margin:5
  },
  imageStyle: {
    flex: 1,
    width: 55,
    height: 30,
    resizeMode: 'contain'
  }
}

class CreateFormGroups extends Component{

  render(){

    const { groups, selectedGroup, classes, isEditing } = this.props


    //USE IS EDITING PROPERT TO RENDER/NOT RENDER DELETE BUTTONS. COMPONENT ALSO USED WHEN VIEWING SWEEPSTAKE!!!


    return(
      <Grid container alignItems={'center'} justify={'center'}>
        <Grid item xs>
          <Grid container justify={'space-between'}>
            {Object.keys(groups).map((groupKey, index) => {
              let paperElevation = (selectedGroup == groupKey) ? 15 : 1
              let backgroundColor = (selectedGroup == groupKey) ? '#efefefef' : '#ffffffff'
              let teams = groups[groupKey]
              let content = teams.map((team, index) => {
                return  <Grid item key={index}>
                          <Grid container justify={'center'}>
                            <Grid item xs={12}>
                              <Paper className={classes.nameDisplay}>
                                <Grid container>
                                  <Grid item xs={8} onClick={() => this.props.removeTeamFromGroup(index)}>
                                    <Typography style={{marginTop: 10}} variant="display1">
                                      {team.name}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={4}>
                                    <img style={{borderImageWidth:2, border: 'solid', borderImageOutset:1}} className={classes.imageStyle} src={team.crestUrl} />
                                  </Grid>
                                </Grid>
                              </Paper>
                            </Grid>
                          </Grid>
                        </Grid>
              })
              return  <Grid className={classes.groupBox} key={index} item xs>
                        <Paper style={{backgroundColor:backgroundColor}} elevation={paperElevation} onClick={() => this.props.onSelectGroup(groupKey)}>
                          <Grid container justify={'center'}>
                            <Grid item xs style={{textAlign:'center'}}>
                              <Typography className={classes.groupName} variant="display1" gutterBottom align="center">
                                Group {index+1}
                                <IconButton style={{marginLeft:20}}><DeleteButton onClick={() => this.props.deleteGroup(groupKey)}></DeleteButton></IconButton>
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs>
                              {content}
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