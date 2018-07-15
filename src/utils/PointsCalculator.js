import Promise from 'bluebird'

export default {

  calculate(fixtures){
    console.log('Calculating...')
    return new Promise((resolve, reject) => {
      let teamScores = {}
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
          let homePoints = teamScores[homeTeamName]
          let awayPoints = teamScores[awayTeamName]

          //Group Stages
          if(matchday < 4){
            console.log('Group Stages')
            homePoints += goalsHomeTeam
            awayPoints += goalsAwayTeam
          }

          //Last 16
          if(matchday == 4){
            console.log('Last 16')
            homePoints += 3 //Points For Reaching Stage
            awayPoints += 3 //Points For Reaching Stage
            //It Went To Extra Time
            if(goalsHomeTeam == goalsAwayTeam){
              let { extraTime } = result
              console.log(homeTeamName + ' VS. ' + awayTeamName + ' was a draw. After Extra Time it was ' + extraTime.goalsHomeTeam + ' : ' + extraTime.goalsAwayTeam)
              homePoints += extraTime.goalsHomeTeam
              awayPoints += extraTime.goalsAwayTeam
            }
            else{
              //It Ended At Full Time
              console.log(homeTeamName + ' VS. ' + awayTeamName + ' was ' + goalsHomeTeam + ' : ' + goalsAwayTeam)
              homePoints += goalsHomeTeam
              awayPoints += goalsAwayTeam
            }
          }

          //Quarters
          if(matchday == 5){
            console.log('Quarters')
            homePoints += 5
            awayPoints += 5
            //It Went To Extra Time
            if(goalsHomeTeam == goalsAwayTeam){
              let { extraTime } = result
              console.log(homeTeamName + ' VS. ' + awayTeamName + ' was a draw. After Extra Time it was ' + extraTime.goalsHomeTeam + ' : ' + extraTime.goalsAwayTeam)
              homePoints += extraTime.goalsHomeTeam
              awayPoints += extraTime.goalsAwayTeam
            }
            else{
              //It Ended At Full Time
              console.log(homeTeamName + ' VS. ' + awayTeamName + ' was ' + goalsHomeTeam + ' : ' + goalsAwayTeam)
              homePoints += goalsHomeTeam
              awayPoints += goalsAwayTeam
            }
          }

          //Semis
          if(matchday == 6){
            console.log('Semis')
            homePoints += 7
            awayPoints += 7
            //It Went To Extra Time
            if(goalsHomeTeam == goalsAwayTeam){
              let { extraTime } = result
              console.log(homeTeamName + ' VS. ' + awayTeamName + ' was a draw. After Extra Time it was ' + extraTime.goalsHomeTeam + ' : ' + extraTime.goalsAwayTeam)
              homePoints += extraTime.goalsHomeTeam
              awayPoints += extraTime.goalsAwayTeam
            }
            else{
              //It Ended At Full Time
              console.log(homeTeamName + ' VS. ' + awayTeamName + ' was ' + goalsHomeTeam + ' : ' + goalsAwayTeam)
              homePoints += goalsHomeTeam
              awayPoints += goalsAwayTeam
            }
          }

          //Final
          if(matchday == 8){
            console.log('Final')
            //Home Team Won
            if(goalsHomeTeam > goalsAwayTeam){
              console.log(homeTeamName + ' VS. ' + awayTeamName + ' was ' + goalsHomeTeam + ' : ' + goalsAwayTeam)
              awayPoints += 9
              homePoints += 12
            }
            else{
              //Away Team Won
              if(goalsAwayTeam > goalsHomeTeam){
                console.log(homeTeamName + ' VS. ' + awayTeamName + ' was ' + goalsHomeTeam + ' : ' + goalsAwayTeam)
                awayPoints += 12
                homePoints += 9
              }
              //Extra Time
              else {
                let { extraTime } = result
                console.log(homeTeamName + ' VS. ' + awayTeamName + ' was a draw. After Extra Time it was ' + extraTime.goalsHomeTeam + ' : ' + extraTime.goalsAwayTeam)
                homePoints += extraTime.goalsHomeTeam //Points for Goals
                awayPoints += extraTime.goalsAwayTeam //Points for Goals
                //Home Team Won in Extra Time
                if(extraTime.goalsHomeTeam > extraTime.goalsAwayTeam){
                  homePoints += 12 //Points for Knockout Stage
                  awayPoints += 9 //Points for Knockout Stage
                }
                else{
                  //Away Team Won In Extra Time
                  if(extraTime.goalsAwayTeam > extraTime.goalsHomeTeam){
                    homePoints += 9 //Points for Knockout Stage
                    awayPoints += 12 //Points for Knockout Stage
                  }
                  else {
                    //It Went To Penalties
                    let { penaltyShootout } = result
                    //Home Team Won In Penalties
                    if(penaltyShootout.goalsHomeTeam > penaltyShootout.goalsAwayTeam){
                      homePoints += 12
                      awayPoints += 9
                    }
                    //Away Team Won In Penalties
                    else{
                      homePoints += 9
                      awayPoints += 12
                    }
                  }
                }
              }
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