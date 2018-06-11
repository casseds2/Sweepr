import React from 'react'
import { Redirect } from 'react-router-dom'
import withStyles from "@material-ui/core/styles/withStyles"
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import authActions from '../../actions/authActions'

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 'auto',
    marginTop: 100,
  },
  header: {
    width: '100%',
    backgroundColor: '#3943B7',
  },
  title: {
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: 45,
    paddingBottom: 7,    
    fontSize: 24,
    color: 'white',
    fontWeight: '300',
  },
  content: {
    paddingLeft: 45,
    paddingRight: 45,
  },
  actions: {
    paddingLeft: 45,
    paddingRight: 45,
  },
  button: {
    backgroundColor: '#3943B7',
    color: 'white',
  },
  footer: {
    marginTop: 30,
  },
  poweredBy: {
    fontSize: 12,
    color: '#252C77',
    padding: 8,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.83,
    },
  },
})

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
    }

    this.updateField = this.updateField.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.register = this.register.bind(this)
  }

  updateField(field, value) {
    this.setState(Object.assign({}, this.state, {[field]: value}))
  }

  updateEmail(e) {
    this.updateField('email', e.target.value)
  }
  updateUsername(e) {
    this.updateField('username', e.target.value)
  }

  updatePassword(e) {
    this.updateField('password', e.target.value)
  }

  register() {
    this.props.register(this.state)
  }

  render() {
    if (this.props.user) {
      return <Redirect to="/" />
    }
    
    const { classes } = this.props
    const { username, password } = this.state
    return (
      <Card className={classes.card}>
        <div className={classes.header}>
          <Typography className={classes.title}>
            Let's get the ball rolling...
          </Typography>
        </div>
        <CardContent className={classes.content}>
          <Grid container>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item xs={12}>
                <TextField 
                  id="email" 
                  label="Email"
                  margin="normal"
                  fullWidth
                  required
                  onChange={this.updateEmail}
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item xs={12}>
                <TextField 
                  label="Username"
                  margin="normal"
                  fullWidth
                  required
                  onChange={this.updateUsername}
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item xs={12}>
                <TextField 
                  label="password"
                  margin="normal"
                  type="password"
                  fullWidth
                  required
                  onChange={this.updatePassword}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions}>
          <Grid container justify="center">
            <Grid item xs={8} sm={6}>
            <Button 
              variant="raised"
              className={classes.button}
              fullWidth
              onClick={this.register}>
              Register
            </Button>              
            </Grid>
          </Grid>
        </CardActions>
        <Grid 
          container 
          justify="center" 
          className={classes.footer}>
          <Grid item>
            <Typography
              className={classes.poweredBy}
              onClick={this.props.navigateToLoginPage}>
              Already a member?
            </Typography>
          </Grid>
        </Grid>
      </Card>
    )
  }
}

export default withStyles(styles)(RegisterForm)