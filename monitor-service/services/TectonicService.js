const CONFIG = require('../settings/app.config');

const PrometheusClient = require('../repositories/PrometheusClient');
const tectonicPrometheusClient = new PrometheusClient({
    endpoint: CONFIG.URLS.TECTONIC_PROMETHEUS
});
//sum(up{job=~"apiserver|kube-scheduler|kube-controller-manager"} == 0)
exports.clusterStatus = async (startTime, endTime) => {

    var result = await tectonicPrometheusClient.normalQuery({'query':'sum(up{job=~"apiserver|kube-scheduler|kube-controller-manager"} == 0)', 'start':startTime,'end':endTime,'step':600});
    // console.log(JSON.stringify(result));
    //{"success":true,"status":200,"data":{"status":"success","data":{"resultType":"vector","result":[]}}}
    if(!result.success){
        //means fail to get response
        return result;
    }else{

        if(result.data.status !== undefined){
            if(result.data.status === 'success'){
                return {success:true,status:result.status, data: true };
            }else{
                return {success:true,status:result.status, data: false};
            }
        }else{
            return {success:false,status:404, message:'No result for cluster status'};
        }
    }
    return result;
};

//SchedulerNumber will get the scheduler perdicly. So we will only get the last one as scheduler number
exports.schedulerNumber = async (startTime, endTime) => {

    console.log(startTime +" :start end: "+endTime);
    var result = await tectonicPrometheusClient.rangeQuery({'query':'(sum(up{job="kube-scheduler"} == 1) / count(up{job="kube-scheduler"})) * 100', 'start':startTime,'end':endTime,'step':600});

    // var result = await tectonicPrometheusClient.rangeQuery({'query':'(sum(up{job="kube-scheduler"} == 1) / count(up{job="kube-scheduler"})) * 100', 'start':startTime,'end':endTime,'step':600});
    console.log("schedulerNumber "+JSON.stringify(result));
    if(!result.success){
        //means fail to get response
        return result;
    }else{

        if(result.data.data.result !== undefined){
            if(result.data.data.result[0] !== undefined){
                var v = result.data.data.result[0].values;
                if(v.length > 0){
                    return {success:true,status:result.status, data: v[v.length-1][1] };
                }else{
                    return {success:false,status:404, message:'No scheduler number within the time window'};
                }
            }else{
                return {success:true,status:result.status, data:0};
            }
            a
        }else{
            return {success:false,status:404, message:'No result for scheduler number'};
        }
    }
};



//count(increase(kube_pod_container_status_restarts[1h]) > 5)
exports.crushLoopingPods = async (startTime, endTime) => {

    var result = await tectonicPrometheusClient.rangeQuery({'query':'count(increase(kube_pod_container_status_restarts[1h]) > 5)', 'start':startTime,'end':endTime,'step':600});
    if(!result.success){
        //means fail to get response
        return result;
    }else{
        // console.log(JSON.stringify(result));
        //{"success":true,"status":200,"data":{"status":"success","data":{"resultType":"matrix","result":[]}}}
        if(result.data.status !== undefined){
            if(result.data.status === 'success'){
                return {success:true,status:result.status, data: result.data.data.result.length };
            }else{
                return {success:true,status:result.status, data: result.data.data.result.length};
            }
        }else{
            return {success:false,status:404, message:'No result for crushLoopingPods'};
        }
    }
};

//(sum(up{job="apiserver"} %3D%3D 1) / count(up{job="apiserver"})) * 100
exports.apiServers = async (startTime, endTime) => {

    var result = await tectonicPrometheusClient.rangeQuery({'query':'(sum(up{job="apiserver"} == 1) / count(up{job="apiserver"})) * 100', 'start':startTime,'end':endTime,'step':600});
    if(!result.success){
        //means fail to get response
        return result;
    }else{
        // console.log(JSON.stringify(result));
        //{"success":true,"status":200,"data":{"status":"success","data":{"resultType":"matrix","result":[]}}}
        if(result.data.data.result !== undefined){
            if(result.data.data.result[0] !== undefined){
                var v = result.data.data.result[0].values;
                if(v.length > 0){
                    return {success:true,status:result.status, data: v[v.length-1][1] };
                }else{
                    return {success:false,status:404, message:'No api servers within the time window'};
                }
            }else{
                return {success:true,status:result.status, data:0};
            }

        }else{
            return {success:false,status:404, message:'No result for api servers'};
        }
    }
};


//(sum(up{job="kube-controller-manager"} == 1) / count(up{job="kube-controller-manager"})) * 100
exports.controllerManagers = async (startTime, endTime) => {

    var result = await tectonicPrometheusClient.rangeQuery({'query':'(sum(up{job="kube-controller-manager"} == 1) / count(up{job="kube-controller-manager"})) * 100', 'start':startTime,'end':endTime,'step':600});
    if(!result.success){
        //means fail to get response
        return result;
    }else{
        //console.log(JSON.stringify(result));
        //{{"success":true,"status":200,"data":{"status":"success","data":{"resultType":"matrix","result":[{"metric":{},"values":[[1528337276,"100"],[1528337876,"100"],[1528338476,"100"],[1528339076,"100"],[1528339676,"100"],[1528340276,"100"],[1528340876,"100"],[1528341476,"100"],[1528342076,"100"],[1528342676,"100"],[1528343276,"100"],[1528343876,"100"],[1528344476,"100"],[1528345076,"100"],[1528345676,"100"],[1528346276,"100"],[1528346876,"100"],[1528347476,"100"],[1528348076,"100"],[1528348676,"100"],[1528349276,"100"],[1528349876,"100"],[1528697492,"100"]]}]}}}

        if(result.data.data.result !== undefined){
            if(result.data.data.result[0] !== undefined){
                var v = result.data.data.result[0].values;
                if(v.length > 0){
                    return {success:true,status:result.status, data: v[v.length-1][1] };
                }else{
                    return {success:false,status:404, message:'No controller Managers within the time window'};
                }
            }else{
                return {success:true,status:result.status, data:0};
            }

        }else{
            return {success:false,status:404, message:'No result for controller Managers'};
        }
    }
}

//https://development-tectonic.development.hps.ac2.io/health
//console status


//ALERTS{alertstate="firing",alertname!="DeadMansSwitch"}
//alert num
exports.alertNum = async (startTime, endTime) => {
    var query = {'query':'ALERTS{alertstate="firing",alertname!="DeadMansSwitch"}', 'start':startTime,'end':endTime,'step':600};
    var result = await tectonicPrometheusClient.rangeQuery(query);
    if(!result.success){
        //means fail to get response
        return result;
    }else{
        // console.log("alertNumber"+JSON.stringify(result));
        //{{"success":true,"status":200,"data":{"status":"success","data":{"resultType":"matrix","result":[{"metric":{},"values":[[1528337276,"100"],[1528337876,"100"],[1528338476,"100"],[1528339076,"100"],[1528339676,"100"],[1528340276,"100"],[1528340876,"100"],[1528341476,"100"],[1528342076,"100"],[1528342676,"100"],[1528343276,"100"],[1528343876,"100"],[1528344476,"100"],[1528345076,"100"],[1528345676,"100"],[1528346276,"100"],[1528346876,"100"],[1528347476,"100"],[1528348076,"100"],[1528348676,"100"],[1528349276,"100"],[1528349876,"100"],[1528697492,"100"]]}]}}}

        if(result.data.data.result !== undefined){
            if(result.data.data.result[0] !== undefined){
                var v = result.data.data.result[0].values;
                if(v.length > 0){
                    return {success:true,status:result.status, data: v[v.length-1][1] };
                }else{
                    return {success:false,status:404, message:'No Alert Num within the time window'};
                }
            }else{
                return {success:true,status:result.status, data:0};
            }

        }else{
            return {success:false,status:404, message:'No result for Alert Num'};
        }
    }
}

//100 - (sum(kube_node_status_capacity_pods) - sum(kube_pod_info)) / sum(kube_node_status_capacity_pods) * 100
//pods percentage
exports.podsPercentage = async (startTime, endTime) => {

    var result = await tectonicPrometheusClient.rangeQuery({'query':'100 - (sum(kube_node_status_capacity_pods) - sum(kube_pod_info)) / sum(kube_node_status_capacity_pods) * 100', 'start':startTime,'end':endTime,'step':600});
    if(!result.success){
        //means fail to get response
        return result;
    }else{
        // console.log(JSON.stringify(result));

        if(result.data.data.result !== undefined){
            if(result.data.data.result[0]!== undefined){
                var v = result.data.data.result[0].values;
                if(v.length > 0){
                    return {success:true,status:result.status, data: v[v.length-1][1] };
                }else{
                    return {success:false,status:404, message:'No Pods Percentage within the time window'};
                }
            }else{
                return {success:true,status:result.status, data:0};
            }

        }else{
            return {success:false,status:404, message:'No result for Pods Percentage'};
        }
    }
}


//https://development-tectonic.development.hps.ac2.io/api/kubernetes/healthz
//Kubenetes API status

//sum(kube_node_status_condition{condition="Ready",status!="true"})
//node status not ready
exports.nodeNotReady = async (startTime, endTime) => {

    var result = await tectonicPrometheusClient.rangeQuery({'query':'sum(kube_node_status_condition{condition="Ready",status!="true"})', 'start':startTime,'end':endTime,'step':600});
    if(!result.success){
        //means fail to get response
        return result;
    }else{
        // console.log(JSON.stringify(result));
        //{{"success":true,"status":200,"data":{"status":"success","data":{"resultType":"matrix","result":[{"metric":{},"values":[[1528337276,"100"],[1528337876,"100"],[1528338476,"100"],[1528339076,"100"],[1528339676,"100"],[1528340276,"100"],[1528340876,"100"],[1528341476,"100"],[1528342076,"100"],[1528342676,"100"],[1528343276,"100"],[1528343876,"100"],[1528344476,"100"],[1528345076,"100"],[1528345676,"100"],[1528346276,"100"],[1528346876,"100"],[1528347476,"100"],[1528348076,"100"],[1528348676,"100"],[1528349276,"100"],[1528349876,"100"],[1528697492,"100"]]}]}}}

        if(result.data.data.result !== undefined){
            if(result.data.data.result[0] !== undefined){
                var v = result.data.data.result[0].values;
                if(v.length > 0){
                    return {success:true,status:result.status, data: v[v.length-1][1] };
                }else{
                    return {success:false,status:404, message:'No Node Not Ready Record within the time window'};
                }
            }else{
                return {success:true,status:result.status, data:0};
            }

        }else{
            return {success:false,status:404, message:'No result for Node Not Ready Record'};
        }
    }
}





