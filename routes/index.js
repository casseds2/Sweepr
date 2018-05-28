var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.render('index', null)
})

router.get('/create', (req, res) => {
  res.render('index', null)
})

router.get('/view/sweepstakes', (req, res) => {
  res.render('index', null)
})

router.get('/createUser', function(req, res, next){
  res.render('createUser', null)
})

module.exports = router
