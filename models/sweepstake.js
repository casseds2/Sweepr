var mongoose = require('mongoose')

var SweepstakeSchema = new mongoose.Schema({
    name: {type:String, default: ''},
    groups: {type:Object},
    entryFee: {type:Number},
    members: [{_id:String, firstName:String, lastName:String}],
    sweepstake: {type:Array, default:[]},
    joinExpiryDate: {type:String},
    owner: {type:String},
    active: {type:Boolean, default: false},
    description: {type:String, default:''},
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('SweepstakeSchema', SweepstakeSchema)