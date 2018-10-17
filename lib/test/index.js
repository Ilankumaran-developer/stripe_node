const stripe = require('../index.js')
const stripe_it = new stripe({key:'sk_test_2kSmiYiONir5vpPRvby1RoJg'})

let mocha  = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should()

chai.use(chaiHttp)

describe('customerslist',()=>{
    it('should list all customers',async ()=>{
       let customer = await stripe_it._.customersList({limit:3});
       customer.data.length.should.be.gt(0)
    })
})