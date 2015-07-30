var DB = require('mongo').Db,
Server = require('mongo').Server;

var server = new Server(process.env.host||'localhost', process.env.PORT|| 27017);
var db = new DB('shortlyDB', server);

db.open(function(err, db){
  assert.equal(null, db);
  console.log('DB established');

  db.on('close', test.done.bind(test));
  module.exports = db;
});