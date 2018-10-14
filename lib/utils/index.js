const request = require('request')
const https = require('https')
const querystring = require('querystring');
const utils = function(){
this.path='https://api.stripe.com';
this.endpoint = '';
this.key = '';
this.payload = {};
this.method = 'POST';  // Default to POST

}
utils.prototype._makeObjectReady =  function(endpoint,key,paylaod,method){
		this.endpoint = endpoint;
		this.key = key;
		this.paylaod = paylaod
		this.method = method;
		return 1;
}
utils.prototype._prepObject = function(data)
{
	    return new Promise((resolve,reject)=>{
			Object.keys(data).forEach(function(key) {
            if (typeof data[key] === 'object' && data[key] !== null) {
                var o = data[key];
                delete data[key];
                Object.keys(o).forEach(function(k) {
                    var new_key = key + "[" + k + "]";
                    data[new_key] = o[k];
                });
            }
        });

         resolve(querystring.stringify(data));
		})
        
}
utils.prototype._makeRequest = function(){
	var _self = this;
	var auth = 'Basic ' + new Buffer(this.key + ":").toString('base64');
	return new Promise(async (resolve,reject)=>{
		var fullPath = this.path +this.endpoint;
		var data = await _self._prepObject(this.payload);
		var options = {
			host:'api.stripe.com',
			port:'443',
			path:this.endpoint,
			method:this.method,
			headers: {
                  'Authorization': auth,
                  'Accept': 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Content-Length': data.length
              }
		}
		var req = https.request(options);
		req.on('response',(res)=>{
			    var response = '';
            res.setEncoding('utf8');
            res.on('data',(chunk)=> {
                    response += chunk;
            });
			    res.on('end',()=> {
                    var err = 200 == res.statusCode ? null : res.statusCode;
                    try {
                        response = JSON.parse(response);
                    }
                    catch(e) {
                        err = 1;
                        response = { error : { message : "Invalid JSON from stripe.com" } };
                    }
                    err && (err = { statusCode: err, response: response });
					if(err){
						reject(err)
					}
					else{
						resolve(response)
					}
                   
            });
		})
		req.write(data)
		req.end();
		
		
	})
	
	
}
module.exports = utils;