import React from 'react'
import { 
  Grid, 
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

class GroupTable extends React.Component{
  render(){
    const { classes, group, letter } = this.props
    const teams = group.map((team, index) => {
      return (
        <TableRow key={index}>
          <TableCell style={{padding:20}} component="th" scope="row">{team.team}</TableCell>
          <TableCell><img src={team.crestURI} className={classes.imageStyle} /></TableCell>
          <TableCell>{team.playedGames}</TableCell>
          <TableCell>{team.goals}</TableCell>
          <TableCell>{team.points}</TableCell>
        </TableRow>
      )
    })

    return(
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell></TableCell>
                <TableCell>Games</TableCell>
                <TableCell>Goals</TableCell>
                <TableCell>Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teams}
            </TableBody>
          </Table>
        </Paper>
    )
  }
}

export default withStyles(styles)(GroupTable)