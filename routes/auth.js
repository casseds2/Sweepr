var express = require('express');
var router = express.Router();
var AccountController = require('../controllers/AccountController')

router.post('/:action', function(req, res, next){
    
    var action = req.params.action
    
    console.log('Action: ' + action)

    if(action == 'register'){
        console.log('Req: ' + JSON.stringify(req.body))
        AccountController.create(req)
        .then(data => {
            console.log('Data: ' + JSON.stringify(data))
            res.json({
                confirmation: 'success',
                data: data
            })
        })
        .catch(err => {
            console.log('Error: ' + JSON.stringify(err))
            res.json({
                confirmation: 'fail',
                err: err
            })
        })
    }

    if(action == 'login'){
        AccountController.login(req)
        .then(data => {
            console.log('Data: ' + JSON.stringify(data))
            res.json({
                confirmation: 'success',
                data: data
            })         
        })
        .catch(err => {
            console.log('Error: ' + JSON.stringify(err))
            res.json({
                confirmation: 'fail',
                err: err
            })
        })
    }
})

router.get('/:action', function(req, res, next){
    
    var action = req.params.action
       
    if(action == 'currentuser'){
        AccountController.currentUser(req)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err
            })
        })
    }

    if(action == 'logout'){
      req.session.reset()
      res.json({
          confirmation: 'success',
          message: 'Logged Out'
      })
  }
})

module.exports = router