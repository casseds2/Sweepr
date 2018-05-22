var mongoose = require('mongoose')

var AccountSchema = new mongoose.Schema({
    username: {type:String, default:''},
    firstName: {type:String, default:''},
    lastName: {type:String, default:''},
    email: {type:String, default:''},
    password: {type:String, default: ''},
    pools: [{id: String}],
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('AccountSchema', AccountSchema)