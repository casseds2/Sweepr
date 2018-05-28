var mongoose = require('mongoose')

var SweepstakeSchema = new mongoose.Schema({
    name: {type:String, default: ''},
    teams : [{type:String}],
    members: [{type:String}],
    isPrivate: {type:Boolean, default: false},
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('SweepstakeSchema', SweepstakeSchema)