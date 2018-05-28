var express = require('express');
var router = express.Router();
var controllers = require('../controllers')

router.get('/:resource', function(req, res, next){

  var resource  = req.params.resource
  var controller = controllers[resource]

  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request: ' + resource
    })
    return
  }
  controller.find(req.query)
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
})

router.get('/:resource/:id', function(req, res, next){
    
  var resource = req.params.resource
  var id = req.params.id
  var controller = controllers[resource]

  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request: ' + resource
    })
    return
  }
  controller.findById(id)
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
})

router.post('/:resource', (req, res, next) => {

  var resource = req.params.resource
  var controller = controllers[resource]

  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request: ' + resource
    })
    return
  }

  controller.create(req)
  .then(data => {
    res.json({
      confirmation: 'success',
      data: data
    })
  })
  .catch(err => {
    res.json({
      confirmation: 'fail',
      err: err
    })
  })

})

router.put('/resource/:id', (req, res, next) => {

  var resource = req.params.resource
  var id = req.params.id
  var controller = controllers[resource]

  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request: ' + resource
    })
    return
  }

  controller.update(id, req.body, (err, result) => {
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }

    res.json({
      confirmation: 'success',
      data: result
    })
  })

})

router.delete('/:resource/:id', (req, res, next) => {

    var resource = req.params.resource
    var id = req.params.id
    var controller = controllers[resource]

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }
    controller.delete(id)
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

})

module.exports = router;