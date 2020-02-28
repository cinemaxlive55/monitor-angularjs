/**
 * 
 */

const docs = require('koa-docs');

exports.init = app => {	
	//Create a path for viewing the docs (only GET method is supported)
	app.use(docs.get('/docs', {
		title: 'Dashboard APIs',
		version: '1.0.0',
		
		theme: 'simplex',    // Specify a theme from www.bootswatch.com;
		                     // default is un-themed bootstrap
		
		routeHandlers: 'disabled',  // Hide the route implementation code from docs
		
		groups: [
		   { groupName: 'API', routes: [/*  ... route specs ...  */] }
		]
	}));
}
