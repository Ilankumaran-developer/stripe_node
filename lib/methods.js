const utils = require('./utils/index.js')
const utilities = new utils()

module.exports = (key)=>{
	var methods = {};
	const charges = require('./processors/charges.js')(key)
	const token = require('./processors/token.js')(key)
	methods.createCharge  = (chargeDetails)=>{return charges.create(chargeDetails,key)}
	methods.createToken = (tokenDetails) => {return token.create(tokenDetails,key)}
	methods.chargeList = (details) => {return charges.list(details,key)}
	return methods;
}