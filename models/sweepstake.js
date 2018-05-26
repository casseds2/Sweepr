var mongoose = require('mongoose')

var SweepstakeSchema = new mongoose.Schema({
    name: {type:String, default: ''},
    teams : [{ body: String }],
    members: [{ body: String }],
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('SweepstakeSchema', SweepstakeSchema)