const schedule = require('node-schedule');
const tectonicService = require('../services/TectonicService')
const CONFIG = require('../settings/app.config');
const moment = require('moment');


exports.init = (io) => {

    schedule.scheduleJob('*/10 * * * * *', async () => {
        let result = await tectonicService.clusterStatus(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
        //result.success means sucessfully get the result whatever success or not
        let up = CONFIG.UP.DEFAULT;
        if(result.success) {
            if(result.data){
                up = CONFIG.UP.UP;
            }else{
                up = CONFIG.UP.DOWN;
            }
        }else{
            //didn't get the expected result, set it to default
        }
        io.broadcast('TIER2-TECTONIC-CLUSTER-STATUS', {
            up: up
        });
        console.log('running tier2 tectonic clusterStatus every 10 seconds ');
    });

    schedule.scheduleJob('*/10 * * * * *', async () => {
        let result = await tectonicService.schedulerNumber(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
        let  num = -1;
        if(result.success){
            num = result.data
        }else{
            //didn't get the expected result, set to DEFAULT
        }
        io.broadcast('TIER2-TECTONIC-SCHEDULER-NUMBER', {
            num: num
        });
        console.log('running tier2 tectonic schedulerNumber every 10 seconds ');
    });

    schedule.scheduleJob('*/10 * * * * *', async () => {
        let result = await tectonicService.crushLoopingPods(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
        let  num = -1;
        if(result.success){
            num = result.data
        }else{
            //didn't get the expected result, set to DEFAULT
        }
        io.broadcast('TIER2-TECTONIC-CRUSHLOOPING-PODS', {
            num: num
        });
        console.log('running tier2 tectonic crushlooping every 10 seconds ');
    });

    schedule.scheduleJob('*/10 * * * * *', async () => {

        let result = await tectonicService.apiServers(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
        let  num = -1;
        if(result.success){
            num = result.data
        }else{
            //didn't get the expected result, set to DEFAULT
        }
        io.broadcast('TIER2-TECTONIC-API-SERVERS', {
            num: num
        });
        console.log('running tier2 tectonic api servers every 10 seconds ');
    });

    schedule.scheduleJob('*/10 * * * * *', async () => {
        let result = await tectonicService.controllerManagers(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
        let  num = -1;
        if(result.success){
            num = result.data
        }else{
            //didn't get the expected result, set to DEFAULT
        }
        io.broadcast('TIER2-TECTONIC-CONTROLLER-MANAGERS', {
            num: num
        });
        console.log('running tier2 tectonic controller manangers every 10 seconds ');
    });


    schedule.scheduleJob('*/10 * * * * *', async () => {
        let result = await tectonicService.nodeNotReady(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
        let  num = -1;
        if(result.success){
            num = result.data
        }else{
            //didn't get the expected result, set to DEFAULT
        }
        io.broadcast('TIER2-TECTONIC-NODE-NOT-READY', {
            num: num
        });
        console.log('running tier2 tectonic NODE NOT READY every 10 seconds ');
    });


    schedule.scheduleJob('*/10 * * * * *', async () => {
        console.log("time is "+moment().subtract(10, 'seconds')+ " : "+moment());
        let result = await tectonicService.alertNum(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));

        let  num = -1;
        if(result.success){
            num = result.data
        }else{
            //didn't get the expected result, set to DEFAULT
        }
        io.broadcast('TIER2-TECTONIC-ALERT-NUMBER', {
            num: num
        });
        console.log('running tier2 tectonic ALERT NUMBER every 10 seconds ');
    });

    schedule.scheduleJob('*/10 * * * * *', async () => {
        let result = await tectonicService.podsPercentage(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
        let  num = -1;
        if(result.success){
            num = result.data * 1;
            num = num.toFixed(2);

        }else{
            //didn't get the expected result, set to DEFAULT
        }
        io.broadcast('TIER2-TECTONIC-PODS-PERCENTAGE', {
            num: num
        });
        console.log('running tier2 tectonic PODS PERCENTAGE every 10 seconds ');
    });



}