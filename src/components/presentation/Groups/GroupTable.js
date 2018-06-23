import React from 'react'
import { 
  Grid, 
  Paper, 
  withStyles,
  Table, 
  TableBody, 
  TableCell, 
  TableHead,
  Typography,
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
    const teams = group.map((teamElem, index) => {
      const { playedGames, goalDifference, points, team, crestURI, goals, goalsAgainst } = teamElem
      return (
        <TableRow key={index}>
          <TableCell style={{padding:20}} component="th" scope="row"><Typography>{team}</Typography></TableCell>
          <TableCell><img src={crestURI} className={classes.imageStyle} /></TableCell>
          <TableCell><Typography>{playedGames}</Typography></TableCell>
          <TableCell><Typography>{goals}</Typography></TableCell>
          <TableCell><Typography>{goalsAgainst}</Typography></TableCell>
          <TableCell><Typography>{goalDifference}</Typography></TableCell>
          <TableCell><Typography>{points}</Typography></TableCell>
        </TableRow>
      )
    })

    return(
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant='caption'>Team</Typography></TableCell>
                <TableCell></TableCell>
                <TableCell><Typography variant='caption'>Played</Typography></TableCell>
                <TableCell><Typography variant='caption'>Goals For</Typography></TableCell>
                <TableCell><Typography variant='caption'>Goals Against</Typography></TableCell>
                <TableCell><Typography variant='caption'>Goals +/-</Typography></TableCell>
                <TableCell><Typography variant='caption'>Points</Typography></TableCell>
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