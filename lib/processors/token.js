const utils = require('../utils/index.js')
const utilities = new utils();
module.exports  = (key)=>{
 var key = key
 
 var tokenActions = {};
 tokenActions.create = async(tokenDetails,key)=>{
		await utilities._makeObjectReady('/v1/tokens',key,tokenDetails,'POST')
		var result = await utilities._makeRequest()
		return result
}
return tokenActions
}