var Account = require('../models/account')
var Promise = require('bluebird')

module.exports = {

    findById: (id) => {
        return new Promise((resolve, reject) => {
            Account.findById(id, (err, profile) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(profile)
            })
        })
    },

    find: (params) => {
        return new Promise((resolve, reject) => {
            Account.find(params, (err, profiles) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(profiles)
            })
        })
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            Account.findByIdAndRemove(id, (err, profile) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(profile)
            })
        })
    }

}