const passport = require('koa-passport');
const jwt = require('jsonwebtoken'); // auth via JWT for hhtp
const fs = require('fs')

const CONFIG =  require('../settings/app.config');

//POST /loginJwt
/* --------------------------------------------------------------------- */
/*   After logined, create JWT Token                                     */
/*   Then check auth  with JWT token                                     */
/* --------------------------------------------------------------------- */
exports.loginJwt = async (ctx, next) => {
	//first check if user logined with username and password
	//it will go to LocalStratage first
  await passport.authenticate('local', function (err, user) {
  		console.log(user);
	    if (user === false) {
	      ctx.throw(401, "Login failed");
	    } else {
	      //--payload - info to put in the JWT
	      const payload = {
	        id: user.id,
	        username: user.username
	      };
	      const token = jwt.sign(payload, CONFIG.JWT.secret); //JWT is created here
	      ctx.body = {user: user.username, token: token};
	    }
  })(ctx, next);
};



//GET /logout
exports.logout = async (ctx, next) => {
  ctx.logout();
  ctx.redirect('/');
};

//GET /health
exports.health = async (ctx, next)  => {
    ctx.body = {'status':'up'};
};