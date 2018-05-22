var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

router.get('/createUser', function(req, res, next){
  res.render('createUser', null)
})

module.exports = router
