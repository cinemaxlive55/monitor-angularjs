/*
 * use passport for authentication
 */
const passport = require('koa-passport');

exports.init = app => {
	app.use(passport.initialize());
};