import Promise from 'bluebird'

export default {
  randomizeGroups(groups, members){
    return new Promise((resolve, reject) => {
      let generated = {}
      for(var j = 0; j < members.length; j++){
        let assigns = []
        Object.values(groups).forEach((group, index) => {
          let random = Math.floor(Math.random() * group.length)
          assigns.push(group[random])
        })
        generated[members[j]._id] = assigns
      }
      resolve(generated)
    })
  }
}