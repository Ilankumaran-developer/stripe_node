const utils = require('../utils/index.js')
const utilities = new utils();
module.exports  = (key)=>{
 var key = key
 
 var customerActions = {};
 customerActions.create = async(chargeDetails,key)=>{
		await utilities._makeObjectReady('/v1/customers',key,chargeDetails,'POST')
		var result = await utilities._makeRequest()
		return result;
}
customerActions.list = async(chargeDetails,key)=>{
		await utilities._makeObjectReady('/v1/customers',key,chargeDetails,'GET')
		var result = await utilities._makeRequest()
		return result;
}
return customerActions
}