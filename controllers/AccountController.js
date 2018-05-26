var Account = require('../models/account')
var bcrypt = require('bcrypt')
var Promise = require('bluebird')

module.exports = {

    create: (req) => {
        req['body']['password'] = bcrypt.hashSync(req.body.password, 10)
        return new Promise(function(resolve, reject){
            Account.create(req.body, (err, profile) => {
            if(err){
                reject(err)
                return
            }
            req.session.user = profile._id
            resolve(profile)
          })
        })
    },

    update: (id, params) => {
      return new Promise((resolve, reject) => {
        Account.findByIdAndUpdate(id, params, (err, profile) => {
          if(err){
            reject(err)
            return
          }
          resolve(profile)
        })
      })
    },

    login: (req) => {
      let params = {username: req.body.username}
      return new Promise(function(resolve, reject){
          Account.find(params, (err, profiles) => {
              if(err){
                  reject({message: 'User Login Failed!'})
                  return
              }
              if(profiles.length == 0){
                  reject({message: 'User Does Not Exist!'})
                  return
              }
              let profile = profiles[0]
              let isPasswordCorrect = bcrypt.compareSync(req.body.password, profile.password)
              if(isPasswordCorrect == false){
                  reject({message: 'Entered Wrong Password!'})
                  return
              }
              req.session.user = profile._id
              resolve(profile)
          })
      })
    },

    currentUser: (req) => {
        return new Promise((resolve, reject) => {  
            if(req.session == null){
                resolve({error: 'No Session'})
                return
            }
            console.log(JSON.stringify(req.session))
            if(req.session.user == null){
                resolve({error: 'No Session For User'})
                return
            }
            Account.findById(req.session.user, (err, profile) => {
                if(err){
                    reject(err)
                    return
                }
                if(profile == null){
                  reject({error: 'No Profile'})
                  return
                }
                resolve(profile)
            })
        })
    }

}