var mongoose = require('mongoose')

var SweepstakeSchema = new mongoose.Schema({
    name: {type:String, default: ''},
    groups: {type:Object},
    entryFee: {type:Number},
    members: [{_id:String, firstName:String, lastName:String}],
    joinExpiryDate: {type:String},
    owner: {type:String},
    active: {type:Boolean, default: false},
    description: {type:String, default:''},
    isPrivate: {type:Boolean, default: false},
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('SweepstakeSchema', SweepstakeSchema)