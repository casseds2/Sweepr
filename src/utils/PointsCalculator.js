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
        if(status == 'FINISHED' || matchday > 3){
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
          //Last 16 (3 Points for Reaching it, 2 extra for progressing to 1/4s)
          if(matchday == 4){
            homePoints += 3
            awayPoints += 3
            // if(goalsHomeTeam > goalsAwayTeam){
            //   homePoints += 2
            // }
            // else{
            //   if(goalsHomeTeam == goalsAwayTeam){
            //     //It Went To Extra Time
            //     let { extraTime } = result
            //     let extraHome = extraTime['goalsHomeTeam']
            //     let extraAway = extraTlsAwayTeam']
            //     if(extraHome > extraAway){
            //       //Home ime['goaTeam Won In Extra Time
            //       homePoints += 2
            //     }
            //     else{
            //       if(extraHome == extraAway){
            //         //It Went To Penalties
            //         let { penaltyShootout } = result
            //         let penHome = penaltyShootout['goalsHomeTeam']
            //         let penAway = penaltyShootout['goalsAwayTeam']
            //         if(penHome > penAway){
            //           //Home Team Won on Penalties
            //           homePoints += 2
            //         }
            //         else{
            //           //Away Team Won on Penalties
            //           penAway += 2
            //         }
            //       }
            //       else{
            //         //Away Team Won In Extra Time
            //         awayPoints += 2
            //       }
            //     }
            //   }
            //   else{
            //     //Away Team Won
            //     awayPoints += 2
            //   }
            // }
          }

          //Quarters
          if(matchday == 5){
            homePoints += 5
            awayPoints += 5
          }

          //Semis
          if(matchday == 6){
            homePoints += 7
            awayPoints += 7
          }

          //3rd Place Play Off
          // if(matchday == 7){

          // }

          //Final
          if(matchday == 8){
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