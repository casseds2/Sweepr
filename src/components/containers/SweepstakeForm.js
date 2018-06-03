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
    marginLeft: 30
  },
  saveButtonStyle: {
    margin: 5
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
    this.save = this.save.bind(this)
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
    console.log('State: ' + JSON.stringify(this.state))
    console.log(event.target.id + ' === ' + event.target.value)
    let updated = Object.assign({}, this.state)
    updated[event.target.id] = event.target.value
    this.setState(
      updated
    )
  }

  addGroup(){
    console.log('State: ' + JSON.stringify(this.state))
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
    console.log('Groups: ' + JSON.stringify(groups))
    updated['groups'] = groups
    this.setState({
      groups: groups
    })
  }

  save(){
    console.log('Save')
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
            <Grid item className={classes.textEntryStyle}>
              <TextField
                required
                id="name"
                label="Sweepstake Name"
                value={this.state.name}
                margin="normal"
                onChange={this.updateField}
              />
            </Grid>
            <Grid item className={classes.textEntryStyle}>
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
            <Grid container>
              <Grid item xs={4}>
                <Grid container justify={'center'}>
                  <Grid item style={{marginTop: 18}}>
                    <Typography variant="display1" gutterBottom align="center">
                      Available Teams
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Grid container justify={'center'}>
                  <Grid item >
                    <IconButton style={{label: 'Add'}} aria-label="Add Group">
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
                onClick={this.save}
              >
                Save
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
    createSweepstake: (params) => dispatch(sweepstakeActions.createSweepstake(params)),
    fetchProfiles: () => dispatch(userActions.fetchAllUsers()),
    fetchTeams: (id) => dispatch(competitionActions.fetchTeams(id)),
    fetchCompetition: (id) => dispatch(competitionActions.fetchCompetition(id))
	}
}

export default compose(withStyles(styles), connect(stateToProps, dispatchToProps))(SweepstakeForm)