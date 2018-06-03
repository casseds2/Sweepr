import superagent from 'superagent'
import Promise from 'bluebird'

export default {
  get: (url, query) => {
    return new Promise((resolve, reject) => {
      superagent.get(url)
      .set('Accept', 'application/json')
      .set('X-Auth-Token', 'd9555dd3b9de42a59fd71da70b404ec0')
      .query(query)
      .end((err, response) => {
        if(err){
          reject(err)
          return
        }
        resolve(response.body)
      })
    })
  }
}