const rp = require('request-promise');
const CONFIG = require('../settings/app.config');

//return a data
exports.queryData = () => {
    var options = {
        method: 'GET',
        uri: CONFIG.URLS.TECTONIC_PROMETHEUS+'/api/v1/query_range',
        resolveWithFullResponse: true    //This is the indicator of response is reponse or just a body
    };
    console.log("start getClusterStatusData");
    return rp(options)
        .then(function (response) {
            console.log("GET succeeded with status %d", response.statusCode);
            if(response.statusCode == 200){
                return response.body;
            }else if(response.statusCode == 404){
                ctx.throw(404, 'No Page Data found');
            }
        })
        .catch(function (err) {
            console.log("GET error with status %d", err);
            ctx.throw(500, err);
        });
};