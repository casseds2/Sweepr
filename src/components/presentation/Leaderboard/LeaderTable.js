import React from 'react'
import { 
  Paper, 
  withStyles,
  Table, 
  TableBody,
  TableCell,
  Typography,
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
      sweepstake.sweepstake.map((entry) => {
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
      let positionStyle = (index == 0 || index == 1 || index == 2 || index == 3 || index == 4) ? {borderStyle: 'solid', borderWidth: 1, textAlign: 'center', paddingTop: 5} : {textAlign: 'center'} 
      return (
        <TableRow key={index}>
          <TableCell><Typography style={positionStyle}variant='body1'>{index+1}</Typography></TableCell>
          <TableCell><Typography style={{textAlign:'left'}}variant='body1'>{standing.username}</Typography></TableCell>
          <TableCell><Typography style={{textAlign:'left'}}variant='body1'>{teams[0].name} : {teams[0].points}</Typography></TableCell>
          <TableCell><Typography style={{textAlign:'left'}}variant='body1'>{teams[1].name} : {teams[1].points}</Typography></TableCell>
          <TableCell><Typography style={{textAlign:'left'}}variant='body1'>{teams[2].name} : {teams[2].points}</Typography></TableCell>
          <TableCell><Typography style={{textAlign:'center'}}variant='body1'>{standing.overall}</Typography></TableCell>
        </TableRow>
      )
    })
    return(
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell><Typography variant='title'>User</Typography></TableCell>
                <TableCell><Typography variant='title'>Team 1</Typography></TableCell>
                <TableCell><Typography variant='title'>Team 2</Typography></TableCell>
                <TableCell><Typography variant='title'>Team 3</Typography></TableCell>
                <TableCell><Typography variant='title'>Overall</Typography></TableCell>
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