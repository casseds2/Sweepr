generateRandom: (group) => {
  console.log('Group:' + JSON.stringify(group))
  let randIndex = Math.floor(Math.random() * group.length)
  return group[randIndex] 
} 
 
export default {

  getRandomSelection: (groups) => { //takes a number of groups and will take random entry from each group
    console.log('Groups: ' + JSON.stringify(groups))
    let randomGroup = []
    groups.map((team) => {
      let randTeam = generateRandom(team)
      console.log('Rand Team')
      randomGroup.push(randTeam)
    })
    return randomGroup
  }
}