var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var jsonsafeparse = require('json-safe-parse');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'jkgserver'
});

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('test',{title: 'TEST'});
var tmpQuery = "";
connection.connect();

connection.query('SELECT * from users', function(err, rows, fields) {
  if (!err){
//    	console.log('The solution is: ', rows);
	for(var i = 0 ; i < rows.length; i++){
		console.log('USER: ['+i+']', rows[i]);
	}
		res.render('test',{title: 'adasdas', user: rows});
	
  }else{
    console.log('Error while performing Query.');
}
});

//res.send({
//title: 'TEST'
//});

connection.end();
//connection.release();
});
module.exports = router;
