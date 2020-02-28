//format error into json reponse
//https://github.com/koajs/json-error
const error = require('koa-json-error')

exports.init = app => {
	
	//change the reponse error format
	function formatError(err) {
	    return {
	        // Copy some attributes from
	        // the original error
	        status: err.status,
	        message: err.message,

	        // ...or add some custom ones
	        success: false,
	        reason: 'Unexpected'
	    }
	}
	app.use(error(formatError));
	
	//this will show all the stacks in the response
//	app.use(error());
	
}
