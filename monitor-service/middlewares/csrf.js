const CSRF = require('koa-csrf');

exports.init = app => app.use(new CSRF({
	invalidSessionSecretMessage: 'Invalid session secret',
	invalidSessionSecretStatusCode: 403,
	invalidTokenMessage: 'Invalid CSRF token',
	invalidTokenStatusCode: 403,
	disableQuery: false
}));
