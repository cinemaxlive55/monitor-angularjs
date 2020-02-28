const CONFIG = require('../settings/app.config');
const tectonicService = require('./TectonicService')

exports.tectonicRag = async () => {
    let arrayObj = new Array(5);

    // let apiServers = await tectonicService.apiServers(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
    let apiServers = {success:true,status:200, data:99};
    //apiServers
    if(apiServers.success){
        let apiServers_color = CONFIG.COLORS.DEFAULT;
        if(apiServers.data <= CONFIG.TECTONIC_THRESHOLD.ALERT_NUMBER_ERROR){
            apiServers_color = CONFIG.COLORS.RED;
            return apiServers_color;
        }else if (apiServers.data <= CONFIG.TECTONIC_THRESHOLD.ALERT_NUMBER_WARN){
            apiServers_color = CONFIG.COLORS.DEFAULT;
        }else{
            apiServers_color = CONFIG.COLORS.GREEN;
        }
        arrayObj.push(apiServers_color)
    }

    // let controllerManagers = await tectonicService.controllerManagers(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
    let controllerManagers = {success:true,status:200, data:98};
    //controllerManagers
    if(controllerManagers.success){
        let controllerManagers_color = CONFIG.COLORS.DEFAULT;
        if(controllerManagers.data <= CONFIG.TECTONIC_THRESHOLD.CONTROLLER_MANAGERS_ERROR){
            controllerManagers_color = CONFIG.COLORS.RED;
            return controllerManagers_color;
        }else if (controllerManagers.data <= CONFIG.TECTONIC_THRESHOLD.CONTROLLER_MANAGERS_WARN){
            controllerManagers_color = CONFIG.COLORS.DEFAULT;
        }else{
            controllerManagers_color = CONFIG.COLORS.GREEN;
        }
        arrayObj.push(controllerManagers_color)
    }

    // let schedulerNumber = await tectonicService.schedulerNumber(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
    let schedulerNumber = {success:true,status:200, data:45};
    //schedulerNumber
    if(schedulerNumber.success){
        let schedulerNumber_color = CONFIG.COLORS.DEFAULT;
        if(schedulerNumber.data <= CONFIG.TECTONIC_THRESHOLD.SCHEDULER_NUMBER_ERROR){
            schedulerNumber_color = CONFIG.COLORS.RED;
            return schedulerNumber_color;
        }else if (schedulerNumber.data <= CONFIG.TECTONIC_THRESHOLD.SCHEDULER_NUMBER_WARN){
            schedulerNumber_color = CONFIG.COLORS.DEFAULT;
        }else{
            schedulerNumber_color = CONFIG.COLORS.GREEN;
        }
        arrayObj.push(schedulerNumber_color)
    }

    // let crushLoopingPods = await tectonicService.crushLoopingPods(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
    let crushLoopingPods = {success:true,status:200, data: 1};
    //crushLoopingPods
    if(crushLoopingPods.success){
        let crushLoopingPods_color = CONFIG.COLORS.DEFAULT;
        if(crushLoopingPods.data >= CONFIG.TECTONIC_THRESHOLD.CRUSH_LOOPING_PODS_ERROR){
            crushLoopingPods_color = CONFIG.COLORS.RED;
            return crushLoopingPods_color;
        }else if (crushLoopingPods.data >= CONFIG.TECTONIC_THRESHOLD.CRUSH_LOOPING_PODS_WARN){
            crushLoopingPods_color = CONFIG.COLORS.DEFAULT;
        }else{
            crushLoopingPods_color = CONFIG.COLORS.GREEN;
        }
        arrayObj.push(crushLoopingPods_color)
    }

    // let alertNum = await tectonicService.alertNum(moment().subtract(21600, 'seconds').format('X'), moment().format('X'));
    let alertNum = {success:true,status:200, data:0};
    //alertNum
    if(alertNum.success){
        let alertNum_color = CONFIG.COLORS.DEFAULT;
        if(alertNum.data >= CONFIG.TECTONIC_THRESHOLD.SCHEDULER_NUMBER_ERROR){
            alertNum_color = CONFIG.COLORS.RED;
            return alertNum_color;
        }else if (alertNum.data >= CONFIG.TECTONIC_THRESHOLD.SCHEDULER_NUMBER_WARN){
            alertNum_color = CONFIG.COLORS.DEFAULT;
        }else{
            alertNum_color = CONFIG.COLORS.GREEN;
        }
        arrayObj.push(alertNum_color)
    }
    console.log(arrayObj);
    for (i = 0; i < arrayObj.length; i++){
        if(arrayObj[i] == CONFIG.COLORS.DEFAULT){
            return CONFIG.COLORS.DEFAULT;
        }
    }
    return CONFIG.COLORS.GREEN;
};
