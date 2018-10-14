'use strict'

var methods = {}
const stripe =  function (credentials){
	
	this.key = credentials.key
	this._ = require('./methods.js')(this.key)
	}
	
	
	
module.exports = stripe