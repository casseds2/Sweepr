import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Grid, Paper, Typography, withStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { sweepstakeActions, authActions, competitionActions } from '../../actions'
import { Caption, CreateFormTeams, CreateFormGroups, Sweepstake } from '../presentation'
import compose from 'recompose/compose'

const styles = {
  paperStyle: {
    width: 100 + '%',
    marginTop: 20,
    marginBottom: 20
  },
  textEntryStyle: {
    marginLeft: 30,
    marginRight:30
  },
  saveButtonStyle: {
    margin: 5
  },
  dateTimeStyle: {
    marginLeft: 30,
    marginTop: 20
  }
}

class SweepstakeForm extends Component{

  constructor(){
    super()
    this.state = {
      name: '',
      description: '',
      owner: '',
      members: [],
      groups: {},
      selectedGroup: -1,
      numGroups: 0,
      joinExpiryDate: '2018-06-14T12:01'
    }
    this.updateField = this.updateField.bind(this)
    this.addGroup = this.addGroup.bind(this)
    this.addTeamToGroup = this.addTeamToGroup.bind(this)
    this.createSweepstake = this.createSweepstake.bind(this)
    this.removeTeamFromGroup = this.removeTeamFromGroup.bind(this)
    this.deleteGroup = this.deleteGroup.bind(this)
    this.onSelectGroup = this.onSelectGroup.bind(this)
  }

  componentDidMount(){
    let { competitions, selectedCompetitionID, teams } = this.props.competitions
    if(competitions[selectedCompetitionID] == null){
      this.props.fetchCompetition(selectedCompetitionID)
    }
    if(teams[selectedCompetitionID] == null){
      this.props.fetchTeams(selectedCompetitionID)
    }
  }

  //Delete a Group
  deleteGroup(index){
    let updated = Object.assign({}, this.state)
    let groups = updated['groups']
    delete groups[index]
    updated['groups'] = groups
    return updated
  }

  //Updates A Text Field In State With event.id and event.value as key/value
  updateField(event){
    console.log(event.target.id + ' === ' + event.target.value)
    let updated = Object.assign({}, this.state)
    updated[event.target.id] = event.target.value
    this.setState(
      updated
    )
  }

  //Adds an Empty Group With Key of Group Index
  addGroup(){
    let updated = Object.assign({}, this.state)
    let groups = updated['groups']
    let numGroups = updated['numGroups']
    let selectedGroup = this.state.selectedGroup
    groups[numGroups] = []
    selectedGroup += 1
    numGroups += 1
    this.setState({
      groups: groups,
      numGroups: numGroups,
      selectedGroup: selectedGroup
    })
  }

  //Remove a Team From a Group
  removeTeamFromGroup(index){
    let updated = this.state.groups
    let selectedGroup = this.state.selectedGroup
    let teams = updated[selectedGroup]
    teams.splice(index, 1)
    updated[selectedGroup] = teams
    return updated
  }

  //Add Team to a Group
  addTeamToGroup(team){
    let updated = Object.assign({}, this.state)
    let groups = updated['groups']
    let selectedGroup = this.state.selectedGroup
    if(groups[selectedGroup] == null){
      alert('Select A Group!')
      return
    }
    groups[selectedGroup].push(team)
    updated['groups'] = groups
    this.setState({
      groups: groups
    })
  }

  //Send All Relevant Data to Actions
  createSweepstake(){
    let sweepstake = {
      owner: this.props.currentUser._id,
      groups: this.state.groups,
      members: this.state.members,
      name: this.state.name,
      description: this.state.description,
      joinExpiryDate: this.state.joinExpiryDate
    }
    this.props.createSweepstake(sweepstake)
  }

  //Select A Group
  onSelectGroup(groupKey){
    this.setState({
      selectedGroup: groupKey
    })
  }

  render(){

    const { classes } = this.props
    const { competitions, teams, selectedCompetitionID } = this.props.competitions
    const availableTeams = (teams[selectedCompetitionID] == null) ? [] : teams[selectedCompetitionID]
    const caption = (competitions[selectedCompetitionID] == null) ? 'No Header' : <span>{competitions[selectedCompetitionID]['caption']}</span>

    return(
      <Grid item xs={10}>
        <Paper>
          <Caption caption={caption} />
          <Grid container direction={'column'} justify={'flex-start'} className={classes.nameStyle}>
            <Grid item xs className={classes.textEntryStyle}>
              <TextField
                required
                id="name"
                label="Sweepstake Name"
                value={this.state.name}
                margin="normal"
                onChange={this.updateField}
              />
            </Grid>
            <Grid item xs className={classes.textEntryStyle}>
              <TextField
                fullWidth
                required
                id="description"
                label="Description"
                value={this.state.description}
                margin="normal"
                onChange={this.updateField}
              />
            </Grid>
            <Grid item xs className={classes.dateTimeStyle}>
              <TextField
                onChange={this.updateField}
                id="joinExpiryDate"
                label="Closing Date and Time"
                type="datetime-local"
                defaultValue="2018-06-14T12:00"
              />
            </Grid>
            <Grid container>
              <Grid item xs={5}>
                <Grid container justify={'center'} alignContent={'center'} >
                  <Grid item style={{marginTop: 10}}>
                    <Typography variant="display1" gutterBottom align="center">
                      Available Teams
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={7}>
                <Grid container justify={'center'}>
                  <Grid item  style={{margin: 10}}>
                    <IconButton onClick={this.addGroup} style={{label: 'Add'}} aria-label="Add Group">
                      Add Group
                      <AddIcon
                        onClick={this.addGroup}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={5}>
              <CreateFormTeams
                availableTeams={availableTeams}
                addTeamToGroup={this.addTeamToGroup}
              />
            </Grid>
            <Grid item xs={7}>
              <CreateFormGroups
                isEditing={false}
                groups={this.state.groups}
                selectedGroup={this.state.selectedGroup}
                deleteGroup={this.deleteGroup}
                onSelectGroup={this.onSelectGroup}
                removeTeamFromGroup={this.removeTeamFromGroup}
              />
            </Grid>
          </Grid>
          <Grid container justify={'center'} direction={'row'}>
            <Grid item className={classes.saveButtonStyle}>
              <Button
                variant="raised" 
                color="primary"
                onClick={this.createSweepstake}
              >
                Create Sweepstake
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {
    currentUser: state.auth.user,
    competitions: state.competitions
  }
}

const dispatchToProps = (dispatch) => {
	return {
    createSweepstake: (sweepstake) => dispatch(sweepstakeActions.createSweepstake(sweepstake)),
    fetchTeams: (id) => dispatch(competitionActions.fetchTeams(id)),
    fetchCompetition: (id) => dispatch(competitionActions.fetchCompetition(id))
	}
}

export default compose(withStyles(styles), connect(stateToProps, dispatchToProps))(SweepstakeForm)