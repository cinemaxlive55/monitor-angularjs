/**
 * Add all routers here
 * NOTICE: The sequence is very important, especially after ctx.isAuthenticated(),  
 * after that part, all the API need to be authenticated
 */

const postrouters = require('koa-router')();

const auth = require('../controllers/Auth');
const user = require('../controllers/User');
const validate = require('koa2-validation');
const passport = require('koa-passport');

exports.init = app => {

	postrouters.get('/logout', auth.logout);

	postrouters.get('/users', passport.authenticate('jwt', { session: false }),user.getUserList);
	postrouters.get('/getRoleJwt', passport.authenticate('jwt', { session: false }),user.getUserRole);
	postrouters.get('/user/:id', passport.authenticate('jwt', { session: false }),validate(user.v.getUserById), user.getUserById);

	app.use(postrouters.routes());

}