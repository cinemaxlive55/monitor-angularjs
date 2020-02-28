/**
 * 
 */

const cluster = require('cluster');
const http = require('http');
// const numCPUs = require('os').cpus().length;
const numCPUs = 1;

const port = process.env.PORT || 3000;

exports.init = app => {	
	if (cluster.isMaster) {
	  console.log(`Master ${process.pid} is running`);
	
	  // Fork workers.
	  for (let i = 0; i < numCPUs; i++) {
	    cluster.fork();
	  }
	
	  cluster.on('exit', (worker, code, signal) => {
	    console.log(`worker ${worker.process.pid} died`);
	  });
	} else {
	  // Workers can share any TCP connection
	  // In this case it is an HTTP server
		// start server

		app.listen(port, () => console.log('Server listening on', port));
	    console.log(`Worker ${process.pid} started`);
	}
}

console.log(`Docs are available at http://localhost:`+port+`/docs`);

