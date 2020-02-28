const cron = require('node-cron');

exports.init = io => {

    cron.schedule('*/1 * * * *', function(){
        io.broadcast( 'cassandra', {
            color: 'green'
        });

        io.broadcast( 'functionalHealth', {
            color: 'gray'
        });

        io.broadcast( 'infrastructureHealth', {
            color: 'default'
        });
        console.log('running a task every 2 minutes');
    });
}


