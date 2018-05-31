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
import { sweepstakeActions, authActions } from '../../actions'
import { CreateFormGroupTable } from '../presentation'
import compose from 'recompose/compose'

const styles = {
  paperStyle: {
    width: 100 + '%',
    marginTop: 20,
    marginBottom: 20
  },
  headerStyle: {
    paddingTop: 20
  },
  textEntryStyle: {
    marginLeft: 30
  },
  teamlistElemStyle: {
    backgroundColor: '#ededed',
    margin: 5
  },
  saveButtonStyle: {
    margin: 5
  },
  buttonStyle: {
    backgroundColor: 'blue'
  }
}

class SweepstakeForm extends Component{  
  
  constructor(){
    super()
    this.state = {
      form: {
        name: '',
        description: '',
        teams: [],
        owner: '',
        isPrivate: false,
        members: []
      },
      currentTeamName: '',
      selectedGroup: 0,
      numGroups: 0
    }
  }

  handleFormChange(event){
    let updated = Object.assign({}, this.state.form)
    updated[event.target.id] = event.target.value
    this.setState({
      form: updated
    })
  }

  handleChange(event){
    let updated = Object.assign({}, this.state)
    updated[event.target.id] = event.target.value
    this.setState(
      updated
    )
  }

  togglePrivate(event){
    let updated = Object.assign({}, this.state.form)
    updated['isPrivate'] = !updated.isPrivate
    this.setState({
      form: updated
    })
  }

  addTeam(){
    let updated = Object.assign({}, this.state)
    updated['form']['teams'].push({name:updated.currentTeamName, group: updated.selectedGroup})
    this.setState({
      form: updated['form'],
      currentTeamName: updated['currentTeamName'],
      selectedGroup: updated['selectedGroup'],
      numGroups: updated['numGroups']
    })
  }

  removeTeam(entryKey){
    let updated = Object.assign({}, this.state.form)
    updated.teams.splice(entryKey, 1)
    this.setState({
      form: updated
    })
  }

  addGroup(){
    let updated = Object.assign({}, this.state)
    let numGroups = updated['numGroups'] + 1
    let selectedGroup = updated['selectedGroup'] + 1
    this.setState({
      numGroups: numGroups,
      selectedGroup: selectedGroup
    })
  }

  save(){
    let updated = Object.assign({}, this.state.form)
    updated['owner'] = this.props.currentUser._id
    this.setState({
      form: updated
    })
    this.props.createSweepstake(updated)
  }

  selectGroup(index){
    console.log('Select Group: ' + index)
    this.setState(Object.assign({}, this.state, {['selectedGroup']: index}))
  }

  deleteGroup(index){
    // let updated = Object.assign({}, this.state.form)
    // let { teams } = updated
    // teams.splice(index, 1)
    // updated = {...updated.teams, teams }
    // this.setState({ form: updated })
    console.log('Delete... ')
  }

  render(){

    const { classes } = this.props
  
    this.deleteGroup(1)

    return(
      <Grid item xs={10}>
        <Paper>
          <Grid container direction={'row'} justify={'center'}>
            <Grid item className={classes.headerStyle}>
              <Typography     //console.log('CurrentUser: ' + JSON.stringify(this.props.currentUser))

                align={'center'}
                variant={'display1'}
              >
                Create Sweepstake
                <hr />
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction={'column'} justify={'flex-start'} className={classes.nameStyle}>
            <Grid item className={classes.textEntryStyle}>
              <TextField
                required
                id="name"
                label="Sweepstake Name"
                value={this.state.form.name}
                margin="normal"
                onChange={this.handleFormChange.bind(this)}
              />
            </Grid>
            <Grid item className={classes.textEntryStyle}>
              <TextField
                fullWidth
                required
                id="description"
                label="Description"
                value={this.state.form.description}
                margin="normal"
                onChange={this.handleFormChange.bind(this)}
              />
            </Grid>
            <Grid container direction={'row'}>
              <Grid item xs>
                <Grid container justify={'center'}>
                  <Button className={classes.buttonStyle} onClick={ () => { this.addGroup() }} >
                    Add Group
                  </Button>
                </Grid>  
              </Grid>
              <Grid item xs>
                <Grid container justify={'center'}>
                  <Grid item>
                    <TextField
                      id="currentTeamName"
                      label="Teams"
                      type="num"
                      value={this.state.currentTeamName}
                      margin="normal"
                      onChange={this.handleChange.bind(this)}
                    />
                    <IconButton aria-label="Add Team">
                      <AddIcon
                        onClick={ () => this.addTeam() }
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <CreateFormGroupTable
            teams={this.state.form.teams}
            selectedGroup={this.state.selectedGroup}
            numGroups={this.state.numGroups}
            onSelectGroup={(index) => {this.selectGroup(index)}}
            onDeleteGroup={(index) => {this.deleteGroup(index)}}
          />
          <Grid container justify={'center'} direction={'row'}>
            <Grid item className={classes.saveButtonStyle}>
              <Button
                variant="raised" 
                color="primary"
                onClick={ () => { this.save() } }
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
    currentUser: state.auth.user,
  }
}

const dispatchToProps = (dispatch) => {
	return {
    createSweepstake: (params) => dispatch(sweepstakeActions.createSweepstake(params)),
	}
}

export default compose(withStyles(styles), connect(stateToProps, dispatchToProps))(SweepstakeForm)