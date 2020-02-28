//print logs in json
//Please refer to https://github.com/koajs/bunyan-logger/

var bunyan = require('bunyan');
var koaBunyanLogger = require('koa-bunyan-logger');


exports.init = app => {

	var appLogger = bunyan.createLogger({
	  name: 'myapp',
	  level: 'debug',
	  serializers: bunyan.stdSerializers
	});

	app.use(koaBunyanLogger(appLogger));
	app.use(koaBunyanLogger.requestIdContext());
	app.use(koaBunyanLogger.requestLogger());
	
	//in order to print the stack when we get any errors
	app.on('error', (err, ctx) => {
		appLogger.warn(err);
	});
};