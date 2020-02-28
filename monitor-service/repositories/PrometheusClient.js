const qs = require('qs');
const rp = require('request-promise');
const { parse } = require('url');

class PrometheusClient {
    //endpoint : prometheus API
    constructor (options = {}) {
        this.options = options;
    }

    url (...args) {
        let {
            port,
            protocol,
            hostname,
            pathname
        } = parse(this.options.endpoint);

        let api ;
        if(port == undefined){
            api = `${protocol}//${hostname}`;
        }else{
            api = `${protocol}//${hostname}:${port}`;
        }
        let path = `${pathname}${args.join('/')}`.replace(/\/+/, '/');

        return api + path;
    }

    normalQuery (opts) {
        return this.getData(`/query`, opts);
    }

    rangeQuery (opts) {
        return this.getData(`/query_range`, opts);
    }

    getData (path, opts)  {
        let link = this.url(path);
        let query = qs.stringify(opts);
        link = `${link}?${query}`;

        console.log(link);
        var options = {
            method: 'GET',
            uri: link,
            resolveWithFullResponse: true    //This is the indicator of response is reponse or just a body
        };

        return rp(options).then(function (response) {
                if(response.statusCode == 200){
                    return {success:true,status:response.statusCode, data: JSON.parse(response.body)};
                }else if(response.statusCode == 404){
                    return {success:false,status:response.statusCode, message:'No Data found'};
                }else{
                    return {success:false,status:response.statusCode, message:'Get Data issue'};
                }
            })
            .catch(function (err) {
                return {success:false,status:err.status, message:err.statusMessage};
            });
    }
}

module.exports = PrometheusClient;