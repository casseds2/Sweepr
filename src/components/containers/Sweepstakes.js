import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core/'
import { connect } from 'react-redux'
import { sweepstakeActions, authActions } from '../../actions'
import { Sweepstake } from '../presentation'
import compose from 'recompose/compose'

const styles = {
  sweepstakeContainer: {
    textAlign: 'center'
  },
  sweepstakeElement: {
    margin: 5,
    padding: 10
  }
}

class Sweepstakes extends Component{

  constructor(){
    super()
    this.state = {
      sample: [
        { "name": "World Cup", "description": "FIFA World Cup", "joinExpiryDate": "2018-06-14T12:01", "owner": "5b0928cc40e34561268b3022", "members": [{ "_id": "5b0928cc40e34561268b3022", "firstName": "Stephen", "lastName": "Cassedy" }, { "_id": "5b0928cc40e34561268b3022", "firstName": "Stephen", "lastName": "Cassedy" }, { "_id": "5b0928cc40e34561268b3022", "firstName": "Stephen", "lastName": "Cassedy" }, { "_id": "5b0928cc40e34561268b3022", "firstName": "Stephen", "lastName": "Cassedy" }, { "_id": "5b0928cc40e34561268b3022", "firstName": "Stephen", "lastName": "Cassedy" }, { "_id": "5b0928cc40e34561268b3022", "firstName": "Stephen", "lastName": "Cassedy" }, { "_id": "5b0928cc40e34561268b3022", "firstName": "Stephen", "lastName": "Cassedy" }, { "_id": "5b0928cc40e34561268b3022", "firstName": "Stephen", "lastName": "Cassedy" }, { "_id": "5b09410d72570cc8faf14aae", "firstName": "Aaron", "lastName": "Daly" } ], "entryFee": 10, "groups": { "0": [{ "_links": { "self": { "href": "http://api.football-data.org/v1/teams/808" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/808/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/808/players" } }, "name": "Russia", "code": "RUS", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/801" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/801/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/801/players" } }, "name": "Saudi Arabia", "code": "KSA", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/825" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/825/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/825/players" } }, "name": "Egypt", "code": "EGY", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" } ], "2": [{ "_links": { "self": { "href": "http://api.football-data.org/v1/teams/808" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/808/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/808/players" } }, "name": "Russia", "code": "RUS", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/801" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/801/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/801/players" } }, "name": "Saudi Arabia", "code": "KSA", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/825" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/825/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/825/players" } }, "name": "Egypt", "code": "EGY", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" } ], "3": [{ "_links": { "self": { "href": "http://api.football-data.org/v1/teams/808" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/808/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/808/players" } }, "name": "Russia", "code": "RUS", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/801" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/801/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/801/players" } }, "name": "Saudi Arabia", "code": "KSA", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/825" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/825/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/825/players" } }, "name": "Egypt", "code": "EGY", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" } ] } },
        { "name": "World Cup", "description": "FIFA World Cup", "joinExpiryDate": "2018-06-14T12:01", "owner": "5b0928cc40e34561268b3021", "members": [{ "_id": "5b0928cc40e34561268b3022", "firstName": "Stephen", "lastName": "Cassedy" }, { "_id": "5b09410d72570cc8faf14aae", "firstName": "Aaron", "lastName": "Daly" } ], "entryFee": 10, "groups": { "0": [{ "_links": { "self": { "href": "http://api.football-data.org/v1/teams/808" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/808/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/808/players" } }, "name": "Russia", "code": "RUS", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/801" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/801/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/801/players" } }, "name": "Saudi Arabia", "code": "KSA", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/825" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/825/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/825/players" } }, "name": "Egypt", "code": "EGY", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" } ], "2": [{ "_links": { "self": { "href": "http://api.football-data.org/v1/teams/808" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/808/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/808/players" } }, "name": "Russia", "code": "RUS", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/801" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/801/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/801/players" } }, "name": "Saudi Arabia", "code": "KSA", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/825" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/825/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/825/players" } }, "name": "Egypt", "code": "EGY", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" } ], "3": [{ "_links": { "self": { "href": "http://api.football-data.org/v1/teams/808" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/808/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/808/players" } }, "name": "Russia", "code": "RUS", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/801" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/801/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/801/players" } }, "name": "Saudi Arabia", "code": "KSA", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/825" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/825/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/825/players" } }, "name": "Egypt", "code": "EGY", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" } ] } },
        { "name": "World Cup", "description": "FIFA World Cup", "joinExpiryDate": "2018-06-14T12:01", "owner": "5b0928cc40e34561268b3021", "members": [{ "_id": "5b0928cc40e34561268b3022q", "firstName": "David", "lastName": "Reilly" }, { "_id": "5b09410d72570cc8faf14aaf", "firstName": "Aaron", "lastName": "Daly" } ], "entryFee": 10, "groups": { "0": [{ "_links": { "self": { "href": "http://api.football-data.org/v1/teams/808" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/808/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/808/players" } }, "name": "Russia", "code": "RUS", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/801" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/801/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/801/players" } }, "name": "Saudi Arabia", "code": "KSA", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/825" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/825/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/825/players" } }, "name": "Egypt", "code": "EGY", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" } ], "2": [{ "_links": { "self": { "href": "http://api.football-data.org/v1/teams/808" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/808/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/808/players" } }, "name": "Russia", "code": "RUS", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/801" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/801/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/801/players" } }, "name": "Saudi Arabia", "code": "KSA", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/825" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/825/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/825/players" } }, "name": "Egypt", "code": "EGY", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" } ], "3": [{ "_links": { "self": { "href": "http://api.football-data.org/v1/teams/808" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/808/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/808/players" } }, "name": "Russia", "code": "RUS", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/801" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/801/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/801/players" } }, "name": "Saudi Arabia", "code": "KSA", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "_links": { "self": { "href": "http://api.football-data.org/v1/teams/825" }, "fixtures": { "href": "http://api.football-data.org/v1/teams/825/fixtures" }, "players": { "href": "http://api.football-data.org/v1/teams/825/players" } }, "name": "Egypt", "code": "EGY", "shortName": null, "squadMarketValue": null, "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" } ] } }
      ]
    }
    this.deleteSweepstake = this.deleteSweepstake.bind(this)
  }

  componentDidMount(){
    if(this.props.sweepstakes.length === 0){
      this.props.fetchSweepstakes()
    }
  }

  deleteSweepstake(sweepstake, index){
    this.props.deleteSweepstake(sweepstake, index)
  }

  render(){

    const { classes, sweepstakes, currentUser } = this.props    

    const content = (this.state.sample.length > 0) ? this.state.sample.map((sweepstake, index) => {
      return <Grid key={index} 
                   item xs={12}
                >
                <Sweepstake 
                  user={currentUser} 
                  sweepstake={sweepstake} 
                  className={classes.sweepstakeElement}
                  delete={(sweepstake, index) => this.deleteSweepstake(sweepstake, index)}
                />
              </Grid>
    }) : <h1>No Sweepstakes!!!!</h1>

    return(
      <Grid container className={classes.sweepstakeContainer}>
        <Grid item xs={12}>
          <Grid container spacing={16} direction={'column'} justify={'center'} alignItems={'stretch'}>
            { content }
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {
    sweepstakes: state.sweepstake.sweepstakes,
    currentUser: state.auth.user,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchSweepstakes: () => dispatch(sweepstakeActions.fetchSweepstakes()),
    deleteSweepstake: (id) => dispatch(sweepstakeActions.deleteSweepstake(id))
  }
}  

export default compose(withStyles(styles), connect(stateToProps, dispatchToProps))(Sweepstakes)