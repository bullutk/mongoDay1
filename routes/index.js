var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var mongoConnectUrl = "mongodb://localhost:27017/dcclass"
// make a global for a place to stash our db connection
var db;

mongoClient.connect(mongoConnectUrl, (error, database)=>{
	db = database;
})

/* GET home page. */
router.get('/', function(req, res, next) {
  db.collection('students').find({}).toArray((error, studentResults)=>{
  	console.log(studentResults);
  	res.render('index', { students: studentResults });

  })
});

module.exports = router;
