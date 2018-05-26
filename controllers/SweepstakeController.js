var Promise = require('bluebird')
var Sweepstake = require('../models/sweepstake')

module.exports = {

  create: (req) => {
    return new Promise((resolve, reject) => {
        Sweepstake.create(req.body, (err, sweepstake) => {
        if(err){
            reject(err)
            return
        }
        resolve(sweepstake)
      })
    })
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {
      Sweepstake.findById(id, (err, sweepstake) => {
          if(err){
              reject(err)
              return
          }
          resolve(sweepstake)
      })
    })
  },

  find: (params) => {
    return new Promise((resolve, reject) => {
      Sweepstake.find(params, (err, sweepstakes) => {
          if(err){
              reject(err)
              return
          }
          resolve(sweepstakes)
      })
    })
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      Sweepstake.findByIdAndRemove(id, (err, sweepstake) => {
          if(err){
              reject(err)
              return
          }
          resolve(sweepstake)
      })
    })
  }
}