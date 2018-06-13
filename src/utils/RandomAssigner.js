import Promise from 'bluebird'

export default {
  randomizeGroups(groups, members){
    return new Promise((resolve, reject) => {
      let sweepstake = []
      for(var j=0; j < members.length; j++){
        let memberDetails = {}
        let assignedTeams = []
        Object.values(groups).forEach((group, index) => {
          let random = Math.floor(Math.random() * group.length)
          assignedTeams.push(group[random])
        })
        let user = {
          _id: members[j]._id,
          username: members[j].username
        }
        memberDetails['assignedTeams'] = assignedTeams
        memberDetails['user'] = user
        sweepstake.push(memberDetails)
      }
      resolve(sweepstake)
    })
  }
}