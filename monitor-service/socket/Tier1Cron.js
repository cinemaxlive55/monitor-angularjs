const schedule = require('node-schedule');
const CONFIG = require('../settings/app.config');
const tectonicService = require('../services/TectonicService');
const moment = require('moment');
const tier1Service = require('../services/Tier1Service');

exports.init = (io) => {

    schedule.scheduleJob('*/10 * * * * *', function(){
        io.broadcast( 'cassandra', {
            color: 'green'
        });
        console.log('running cassandra task every 10 secs');
    });

    schedule.scheduleJob('*/10 * * * * *', function(){
        io.broadcast( 'functionalHealth', {
            color: 'gray'
        });
    });

    schedule.scheduleJob('*/10 * * * * *', function(){
        io.broadcast( 'infrastructureHealth', {
            color: 'green'
        });
    });

    schedule.scheduleJob('*/10 * * * * *', function(){
        io.broadcast( 'supportApplication', {
            color: 'green'
        });
    });

    schedule.scheduleJob('*/10 * * * * *', function(){
        io.broadcast( 'operational', {
            color: 'green'
        });
    });


    schedule.scheduleJob('*/10 * * * * *', async () => {
        let color = await tier1Service.tectonicRag();
        console.log('tectonic:color= '+color);
        io.broadcast( 'tectonic', {
            color: color
        });

    });

    schedule.scheduleJob('*/10 * * * * *', function(){
        io.broadcast( 'kafka', {
            color: 'gray'
        });
    });

    schedule.scheduleJob('*/10 * * * * *', function(){
        io.broadcast( 'fluentd', {
            color: 'green'
        });
    });

    schedule.scheduleJob('*/10 * * * * *', function(){
        io.broadcast( 'elastic', {
            color: 'green'
        });
    });


}