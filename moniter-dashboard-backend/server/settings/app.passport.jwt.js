/**
 * actually this is the login part to execute the login function
 * Parameters are come from login api
 */

const passport = require('koa-passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userService = require('../services/userService');
const CONFIG =  require('./app.config');
exports.init = () => {	

	//please refer to https://github.com/themikenicholson/passport-jwt
	//please refer to https://github.com/themikenicholson/passport-jwt#extracting-the-jwt-from-the-request
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = CONFIG.JWT.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    	userService.fetchUserByName(jwt_payload.username)
	    .then(user => {
	      if (jwt_payload.username === user.username) {
	    	  console.log("3333 get payload "+jwt_payload);
	    	  done(null, user)
	      } else {
	    	  console.log("3333 get payload fail"+jwt_payload);
	    	  done(null, false)
	      }
	    })
	    .catch(err => done(err));
    }));


}

