//format error into json reponse
//https://github.com/koajs/json-error
const error = require('koa-json-error')

exports.init = app => {
	
	//change the response error format
	function formatError(err) {
		console.error(err);
		var message = err.message;
		var reason = err.reason == undefined ? 'unexpected':err.reason;

	    return {
	        // Copy some attributes from
	        // the original error
	        status: err.status,
	        message: err.message,

	        // ...or add some custom ones
	        success: false,
	        reason: reason
	    }
	}
	//this format will reduce the stack
	app.use(error(formatError));
	
	//this will show all the stacks in the response
//	app.use(error());
	
}
