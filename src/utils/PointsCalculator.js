import Promise from 'bluebird'

export default {

  calculate(fixtures){
    return new Promise((resolve, reject) => {
      let teamScores = {}
      let finalReplay = false
      let semiReplay = false
      for(var i=0; i < fixtures.length; i++){
        let game = fixtures[i]
        let { matchday, homeTeamName, awayTeamName, result, status } = game
        let { goalsHomeTeam, goalsAwayTeam } = result
        if(status == 'FINISHED'){
          /* INITIALIZE TEAMS */
          if(teamScores[homeTeamName] == null){
            teamScores[homeTeamName] = 0
          }
          if(teamScores[awayTeamName] == null){
            teamScores[awayTeamName] = 0
          }
          /* CALCULATE GOALS */

          //console.log(JSON.stringify(homeTeamName + ': ' + goalsHomeTeam + '   ' + awayTeamName + ': ' + goalsAwayTeam))

          let homePoints = teamScores[homeTeamName]
          let awayPoints = teamScores[awayTeamName]

          // console.log('Team: ' + JSON.stringify(homeTeamName) + ' Points: ' + JSON.stringify(homePoints))
          // console.log('Team: ' + JSON.stringify(awayTeamName) + ' Points: ' + JSON.stringify(awayPoints))

          //Calculate Goals
          homePoints += goalsHomeTeam
          awayPoints += goalsAwayTeam

          // console.log('Team: ' + JSON.stringify(homeTeamName) + ' Points: ' + JSON.stringify(homePoints))
          // console.log('Team: ' + JSON.stringify(awayTeamName) + ' Points: ' + JSON.stringify(awayPoints))

          /* CALCULATE STAGE REACHED */
          //Last 16
          if(matchday == 4){
            if(goalsHomeTeam > goalsAwayTeam){
              awayPoints += 3
            }
            else{
              homePoints += 3
            }
          }

          //Quarters
          if(matchday == 5){
            if(goalsHomeTeam > goalsAwayTeam){
              awayPoints += 5
            }
            else{
              homePoints += 5
            }
          }

          //Semis
          if(matchday == 6){
            if(goalsHomeTeam > goalsAwayTeam){
              awayPoints += 7
            }
            else{
              homePoints += 7
            }
          }

          //Final
          if(matchday == 7 || matchday == 8){
            if(goalsHomeTeam > goalsAwayTeam){
              awayPoints += 9
              homePoints += 12
            }
            else{
              awayPoints += 12
              homePoints += 9
            }
          }

          /* UPDATED THE SCORES MAP */
          teamScores[homeTeamName] = homePoints
          teamScores[awayTeamName] = awayPoints
        }
      }
      resolve(teamScores)
    })
  }

}