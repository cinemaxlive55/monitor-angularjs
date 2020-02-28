/**
 * Add all routers here
 * NOTICE: The sequence is very important, especially after ctx.isAuthenticated(),  
 * after that part, all the API need to be authenticated
 */

const prerouters = require('koa-router')();
const auth = require('../controllers/Auth');

exports.init = app => {
    prerouters.get('/health', auth.health);
	prerouters.post('/loginJwt', auth.loginJwt);

	app.use(prerouters.routes());


}