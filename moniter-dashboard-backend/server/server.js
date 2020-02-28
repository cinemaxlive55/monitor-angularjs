/**
 * NOTICE: The sequence is very important  
 * The session, passport, authcheck point are very meaningful
 */
const Koa = require('koa')
const app = new Koa()

const staticPage = require('./middlewares/static');
const bodyParser = require('./middlewares/bodyParser');
const logger = require('./middlewares/logger');
const errors = require('./middlewares/errors');
const passport = require('./middlewares/passport');
const cors = require('./middlewares/cors');

const docs = require('./middlewares/docs');
const cluster = require('./middlewares/cluster');

const passportLocal = require('./settings/app.passport.local');
const passportJwt = require('./settings/app.passport.jwt');

const statelessRouter = require('./settings/app.routers.stateless');
const statefulRouter = require('./settings/app.routers.stateful');

const testSocket = require('./socket/test');
const chatSocket = require('./socket/namespacechat');

const RAG_calculation = require('./cron/RAG_calculation');

//init static page
staticPage.init(app);

//basic init
cors.init(app);
logger.init(app);
errors.init(app);
bodyParser.init(app);
docs.init(app);

/*---------------------------------------------------------------------- */
/*Passport in JWT, don't forget to switch the checkpoint to jwt          */
/*---------------------------------------------------------------------- */
passport.init(app);
passportLocal.init();
passportJwt.init();


//router
statelessRouter.init(app);
statefulRouter.init(app);

//socket
const IO = require( 'koa-socket-2' );
const io = new IO();
const namespacechat = new IO( 'namespacechat' );

io.attach( app );
testSocket.init(io);
namespacechat.attach( app );
chatSocket.init(namespacechat, app);

cluster.init(app);

RAG_calculation.init(io);
