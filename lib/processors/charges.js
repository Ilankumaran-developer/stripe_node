const utils = require('../utils/index.js')
const utilities = new utils();
module.exports  = (key)=>{
 var key = key
 
 var chargeActions = {};
 chargeActions.create = async(chargeDetails,key)=>{
		await utilities._makeObjectReady('/v1/charges',key,chargeDetails,'POST')
		var result = await utilities._makeRequest()
		return result;
}
chargeActions.list = async(chargeDetails,key)=>{
		await utilities._makeObjectReady('/v1/charges',key,chargeDetails,'GET')
		var result = await utilities._makeRequest()
		return result;
}
return chargeActions
}