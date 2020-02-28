/**
 * actually this is the login part to execute the login function
 * Parameters are come from login api
 */

const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const userService = require('../services/userService');

exports.init = () => {	

	
	passport.use(new LocalStrategy(function(username, password, done) {
		userService.fetchUserByName(username)
	    .then(user => {
            console.log("1111 get LocalStrategy ");
	      if (username === user.username && password === user.password) {
              console.log("1111 get LocalStrategy done ");
	        done(null, user)
	      } else {
              console.log("1111 get LocalStrategy wrong ");
	        done(null, false)
	      }
	    })
	    .catch(err => done(err))
	}))

}

