const rp = require('request-promise');
const CONFIG = require('../settings/app.config');

exports.getMemoryData = () => {
    var quaryBody = '{"query":{"bool":{"must":[{"term":{"metricset.name":"memory"}}],"must_not":[],"should":[]}},"from":0,"size":10,"sort":[],"aggs":{}}';
    var options = {
        uri: CONFIG.URLS.ELASTIC + '/metricbeat-6.2.4-2018.06.04/_search',
        method: "POST",
        json: true,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "content-type": "application/json",
        },
        body: JSON.parse(quaryBody),
        resolveWithFullResponse: true
    }
    return rp(options).then(function (response) {
            if(response.statusCode == 200){
                return response.body;
            }else if(response.statusCode == 404){
                ctx.throw(404, 'No Page Data found');
            }
        })
        .catch(function (err) {
            ctx.throw(500, err);
        });
}