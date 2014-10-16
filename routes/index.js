var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
//  res.render('index', { title: 'Express' });
	//use anguar app to instead of the jade template
	res.sendfile('index.html')
});

module.exports = router;
