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
import { sweepstakeActions, authActions, competitionActions, userActions } from '../../actions'
import { CreateFormGroupTable, Caption, Participants } from '../presentation'
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
      numGroups: 0
    }
    this.updateField = this.updateField.bind(this)
    this.addGroup = this.addGroup.bind(this)
    this.addTeamToGroup = this.addTeamToGroup.bind(this)
    this.addMemeber = this.addMemeber.bind(this)
    this.generateSweepstake = this.generateSweepstake.bind(this)
  }

  componentDidMount(){
    let { competitions, selectedCompetitionID, teams } = this.props.competitions
    if(competitions[selectedCompetitionID] == null){
      this.props.fetchCompetition(selectedCompetitionID)
    }
    if(teams[selectedCompetitionID] == null){
      this.props.fetchTeams(selectedCompetitionID)
    }
    this.props.fetchProfiles()
  }

  updateField(event){
    console.log(event.target.id + ' === ' + event.target.value)
    let updated = Object.assign({}, this.state)
    updated[event.target.id] = event.target.value
    this.setState(
      updated
    )
  }

  addGroup(){
    let updated = Object.assign({}, this.state)
    let groups = updated['groups']
    let numGroups = this.state.numGroups
    let selectedGroup = this.state.selectedGroup
    groups[numGroups] = []
    selectedGroup +=1
    numGroups += 1
    this.setState({
      groups: groups,
      numGroups: numGroups,
      selectedGroup: selectedGroup
    })
  }

  addMemeber(event){
    let profile = event.target.value
    let updated = Object.assign({}, this.state)
    let members = updated['members']
    members.push(profile)
    this.setState({
      members: members
    })
  }

  addTeamToGroup(team){
    let updated = Object.assign({}, this.state)
    let groups = updated['groups']
    let selectedGroup = this.state.selectedGroup
    groups[selectedGroup].push(team)
    updated['groups'] = groups
    this.setState({
      groups: groups
    })
  }

  generateSweepstake(){
    let details = {
      groups: this.state.groups,
      members: this.state.members
    }
    this.props.generateSweepstake(details)
  }

  onSelectGroup = (index) => {
    console.log('Index: ' + index)
    this.setState({
      selectedGroup: index
    })
  }

  render(){

    const { classes } = this.props
    const { competitions, teams, selectedCompetitionID } = this.props.competitions
    const { allUsers } = this.props.users
    let availableTeams = (teams[selectedCompetitionID] == null) ? [] : teams[selectedCompetitionID]
    let caption = (competitions[selectedCompetitionID] == null) ? 'No Header' : <span>{competitions[selectedCompetitionID]['caption']}</span>

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
                id="expiryDate"
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
          <CreateFormGroupTable
            availableTeams={availableTeams}
            groups={this.state.groups}
            selectedGroup={this.state.selectedGroup}
            addTeamToGroup={this.addTeamToGroup}
            onSelectGroup={this.onSelectGroup}
          />
          <Participants
            profiles={allUsers}
            members={this.state.members}
            addMember={this.addMemeber}
          />
          <Grid container justify={'center'} direction={'row'}>
            <Grid item className={classes.saveButtonStyle}>
              <Button
                variant="raised" 
                color="primary"
                onClick={this.generateSweepstake}
              >
                Generate Sweepstake
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
    currentUser: state.auth,
    competitions: state.competitions,
    users: state.user
  }
}

const dispatchToProps = (dispatch) => {
	return {
    generateSweepstake: (params) => dispatch(sweepstakeActions.generateSweepstake(params)),
    fetchProfiles: () => dispatch(userActions.fetchAllUsers()),
    fetchTeams: (id) => dispatch(competitionActions.fetchTeams(id)),
    fetchCompetition: (id) => dispatch(competitionActions.fetchCompetition(id))
	}
}

export default compose(withStyles(styles), connect(stateToProps, dispatchToProps))(SweepstakeForm)