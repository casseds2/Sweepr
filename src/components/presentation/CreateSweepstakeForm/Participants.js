import React, { Component } from 'react'
import { 
  Grid, 
  Paper, 
  withStyles, 
  TextField, 
  FormControl, 
  InputLabel,
  Select,
  MenuItem } from '@material-ui/core'

const styles = {
  paperDisplay: {
    margin: 10
  },
  formControl: {
    margin: 10,
    minWidth: 200,
    marginLeft: 30
  }
}

class Participants extends Component{
  
  render(){

    const { classes, members, profiles } = this.props

    let contents = members.map((profile, index) => {
      return  <Grid key={index} item xs={3}>
                <Grid container justify={'center'}>
                  <Grid item xs>
                    <Paper className={classes.paperDisplay} elevation={10}>
                      <Grid container justify={'center'}>
                        <Grid item>
                          <h4>{profile.firstName} {profile.lastName}</h4>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
    })

    let participants = (this.props.profiles.length == 0) ? null : 
      profiles.map((profile, index) => {
      return  <MenuItem key={index} value={profile}>
                <span>{profile.firstName} {profile.lastName}</span>
              </MenuItem>
    })

    return(
      <Grid>
        <Grid style={{marginBottom:20}} container alignContent={'center'} justify={'center'}>
          <Grid item xs>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Participants</InputLabel>
              <Select
                value={"Hello"}
                onChange={(event) => this.props.addMember(event)}
              >
                {participants}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justify={'space-between'}>
          <Grid item xs>
            <Paper>
              <Grid container justify={'flex-start'}>
                {contents}  
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Participants)