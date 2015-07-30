// NOTE: this file is not needed when using MongoDB
var db = require('monk')('localhost/db');

var users = db.get('users');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var createUser = function(username, password){
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(password, null, null).bind(this)
    .then(function(hash) {
      users.insert({password: hash, username: username});
    });
}


  

  createUser('Linus', 'gibberish');
// Users.model = User;

// module.exports = Users;


// var db = require('../config');

// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function(){
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function(){
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function(hash) {
//         this.set('password', hash);
//       });
//   }
// });

module.exports = {
  createUser:createUser,

};
