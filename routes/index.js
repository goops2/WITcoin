var express = require('express');
var router = express.Router();
var getUser = require('./')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* go to landing page */
router.get('/home', function(req, res){
  res.sendFile('/home/delo/witcoin/views/index.html')
});

router.get('/user/:username', function (req, res, next) {
  console.log('Username:', req.username)
  next()
});

/*  */


module.exports = router;
