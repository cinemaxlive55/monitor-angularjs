/**
 * 
 */
exports.KEYS = 'dashboard security key';
exports.SESSION_CONFIG = {
		  key: 'SESSIONID', /** (string) cookie key (default is koa:sess) */
		  /** (number || 'session') maxAge in ms (default is 1 days) */
		  /** 'session' will result in a cookie that expires when session/browser is closed */
		  /** Warning: If a session cookie is stolen, this cookie will never expire */
		  maxAge: 86400000,
		  overwrite: true, /** (boolean) can overwrite or not (default true) */
		  httpOnly: true, /** (boolean) httpOnly or not (default true) */
		  signed: true, /** (boolean) signed or not (default true) */
		  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
		  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
exports.JWT = {
		secret: 'secrect'
};
exports.PORT = 3000;


exports.COLORS = {
    DEFAULT: 'default',
    GRAY: 'gray',
    RED: 'red' ,
    GREEN: 'green'
};

exports.URLS = {
    TECTONIC_PROMETHEUS: 'http://tec-prom-proxy.tectonic-system.development.hps.ac2.io/prometheus/api/v1',
    ELASTIC: 'http://elastic.security.hps.ac2.io:9200'
};

exports.UP = {
    DEFAULT: 'INIT',
    UP: 'UP',
    DOWN: 'DOWN'
};

exports.TECTONIC_THRESHOLD = {
    API_SERVERS_WARN: 50,
    API_SERVERS_ERROR: 20,
    CONTROLLER_MANAGERS_WARN: 50,
    CONTROLLER_MANAGERS_ERROR: 20,
    SCHEDULER_NUMBER_WARN: 50,
    SCHEDULER_NUMBER_ERROR: 20,
    CRUSH_LOOPING_PODS_WARN: 1,
    CRUSH_LOOPING_PODS_ERROR: 2,
    ALERT_NUMBER_WARN: 1,
    ALERT_NUMBER_ERROR: 2,
};

