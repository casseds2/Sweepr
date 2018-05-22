import superagent from 'superagent'
import Promise from 'bluebird'

export default {

  get: (url, query) => {
    return new Promise((resolve, reject) => {
      superagent.get(url)
      .query(query)
      .set('Accept', 'application/json')
      .end((err, response) => {
          if(err){
              reject(err)
              return
          }
          resolve(response.body)
      })
    })
  },

  post: (url, data) => {
    return new Promise((resolve, reject) => {
      superagent.post(url)
      .send(data)
      .set('Accept', 'application/json')
      .end((err, response) => {
          if(err){
              reject(err)
              return
          }
          resolve(response.body)
      })
    })
  },

  put: (url, data) => {
    return new Promise((resolve, reject) => {
      superagent.put(url)
      .send(data)
      .set('Accept', 'application/json')
      .end((err, response) => {
          reject(err)
          return
      })
      resolve(response.body)
    })
  }

}