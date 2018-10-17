const stripe = require('../index.js')
const stripe_it = new stripe({ key: 'sk_test_2kSmiYiONir5vpPRvby1RoJg' })

let mocha = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should()
let assert = require('assert')

chai.use(chaiHttp)

describe('customerslist', () => {
    it('should list all customers', async () => {
        return new Promise(async(resolve, reject) => {
            let customer = await stripe_it._.customersList({ limit: 3 });
            assert.notEqual(customer.length, 0, 'these are not')
            resolve();
        })

    })
})
describe('addingCustomer',()=>{
    it('Should add a new customer',async ()=>{
        return new Promise(async(resolve,reject)=>{
            let token = await stripe_it._.createToken({
                card: {
                  "number": '4242424242424242',
                  "exp_month": 12,
                  "exp_year": 2019,
                  "cvc": '123'
                }});
                console.log(token)
    
            let newCustomer = await stripe_it._.createCustomer({
                description: 'Customer for jenny.rosen@example.com',
                source: token.id // obtained with Stripe.js
              })
              console.log(newCustomer)
              resolve();
            })
        })
        
    })
