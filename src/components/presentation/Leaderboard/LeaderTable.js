import React from 'react'
import { 
  Paper, 
  withStyles,
  Table, 
  TableBody,
  TableCell, 
  TableHead,
  TableRow } from '@material-ui/core'
  
  const styles = {
    paper: {
      marginBottom: 30,
      margin: 10,
      textAlign: 'center'
    },
    container: {
      margin: 10,
      textAlign: 'center'
    },
    imageStyle: {
      flex: 1,
      width: 25,
      height: 25,
      borderWidth: 1,
      borderStyle: 'solid',
      resizeMode: 'contain'
    }
  }

class LeaderTable extends React.Component{
  render(){
    const { classes, sweepstake, teamPoints } = this.props
    let standings = []
    if(Object.keys(teamPoints).length > 0){
      sweepstake.sweepstake.map((entry, index) => {
        let standing = {}
        const { assignedTeams, user } = entry
        let capitalizedName = user.username.charAt(0).toUpperCase() + user.username.substring(1)
        standing['username'] = capitalizedName
        let overallPoints = 0
        standing['teams'] = []
        for(var i=0; i < assignedTeams.length; i++){
          let team = assignedTeams[i].name
          let points = (teamPoints[team] != null) ? teamPoints[team] : 0
          overallPoints += points
          let teamAndPoints = {name: team, points:points}
          standing['teams'].push(teamAndPoints)
        }
        standing['overall'] = overallPoints
        standings.push(standing)
      })
    }
    standings.sort((a, b) => (a.overall < b.overall ? -1 : 1)).reverse()

    let content = standings.map((standing, index) => {
      let teams = standing['teams']    
      return (
        <TableRow>
          <TableCell>{standing.username}</TableCell>
          <TableCell>{teams[0].name} : {teams[0].points}</TableCell>
          <TableCell>{teams[1].name} : {teams[1].points}</TableCell>
          <TableCell>{teams[2].name} : {teams[2].points}</TableCell>
          <TableCell>{standing.overall}</TableCell>
        </TableRow>
      )
    })
    return(
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Team 1</TableCell>
                <TableCell>Team 2</TableCell>
                <TableCell>Team 3</TableCell>
                <TableCell>Overall</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {content}
            </TableBody>
          </Table>
        </Paper>
    )
  }
}

export default withStyles(styles)(LeaderTable)