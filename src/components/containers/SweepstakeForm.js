import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Grid, Paper, Typography } from '@material-ui/core'
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

class SweepstakeForm extends Component{  
  
  constructor(){
    super()
    this.state = {
      form: {
        name: '',
        teams: [],
        isPrivate: false,
        members: []
      },
      currentTeamName: ''
    }
  }

  handleFormChange(event){
    console.log(event.target.id + ' === ' + event.target.value)
    let updated = Object.assign({}, this.state.form)
    updated[event.target.id] = event.target.value
    this.setState({
      form: updated
    })
  }

  handleChange(event){
    console.log(event.target.id + ' === ' + event.target.value)
    let updated = Object.assign({}, this.state)
    updated[event.target.id] = event.target.value
    this.setState(
      updated
    )
  }

  togglePrivate(event){
    let updated = Object.assign({}, this.state.form)
    updated.isPrivate = !updated.isPrivate
    this.setState({
      form: updated
    })
  }

  addTeam(){
    let updated = Object.assign({}, this.state.form)
    updated.teams.push(this.state.currentTeamName)
    this.setState({
      form: updated
    })
  }

  removeTeam(entryKey){
    let updated = Object.assign({}, this.state.form)
    updated.teams.splice(entryKey, 1)
    this.setState({
      form: updated
    })
  }

  save(){
    this.props.createSweepstake(this.state.form)
  }

  componentDidUpdate(){
    console.log(JSON.stringify(this.state))
  }

  componentDidMount(){
    this.props.getProfiles()
  }
  
  render(){

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
      }
    }

    let teamEntries = this.state.form.teams.map((team, index) => {
      return  <Grid item key={index} style={styles.teamlistElemStyle} xs={4}>
                <ListItem
                  role={undefined}
                  dense
                  button
                >
                  <ListItemText primary={team} />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Comments">
                      <DeleteIcon
                        onClick={ () => this.removeTeam(index) }
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Grid>
    })

    return(
      <Grid container>
        <Paper style={{marginTop:20}} style={styles.paperStyle} elevation={24}>
          <Grid container direction={'row'} justify={'center'}>
            <Grid item style={styles.headerStyle}>
              <Typography 
                align={'center'}
                variant={'display1'}
              >
                Create Sweepstake
                <hr />
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction={'column'} justify={'flex-start'} style={styles.nameStyle}>
            <Grid item style={styles.textEntryStyle}>
              <TextField
                required
                id="name"
                label="Sweepstake Name"
                value={this.state.form.name}
                margin="normal"
                onChange={this.handleFormChange.bind(this)}
              />
            </Grid>
            <Grid item style={styles.textEntryStyle}>
              <TextField
                id="currentTeamName"
                label="Teams"
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
            <Grid item>
              <List>
                <Grid container justify={'space-around'}>
                  { teamEntries }
                </Grid>
              </List>
            </Grid>
          </Grid>
          <Grid container justify={'center'} direction={'row'}>
            <Grid item style={styles.saveButtonStyle}>
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

const dispatchToProps = (dispatch) => {
	return {
    createSweepstake: (params) => dispatch(sweepstakeActions.createSweepstake(params)),
    getProfiles: () => dispatch(authActions.getProfiles())
	}
}

export default connect(null, dispatchToProps)(SweepstakeForm)