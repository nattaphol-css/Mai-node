var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', function(req, res, next) {
  res.render('products');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/career', function(req, res, next) {
  res.render('career');
});

module.exports = router;
