const stripe = require('../index.js')
const stripe_it = new stripe({key:'sk_test_2kSmiYiONir5vpPRvby1RoJg'})

let mocha  = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should()
let assert = require('assert')

chai.use(chaiHttp)

describe('customerslist',()=>{
    it('should list all customers',async (done)=>{
       let customer = await stripe_it._.customersList({limit:3});
       assert.notEqual(customer.data.length,0,'these are not')
       done();
    })
})