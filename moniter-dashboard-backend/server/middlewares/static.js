/**
 * please refer to https://github.com/koajs/static
 */

const path = require('path')

const stati = require('koa-static');
exports.init = app => {
	app.use(stati(
			  path.join( __dirname,  '../../client/dist')
			  , {index: 'index.html'}))
};