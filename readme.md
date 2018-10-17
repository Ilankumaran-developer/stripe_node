## Installation

`npm i stripe_it`

## Getting Started
```
var func = async ()=>{ <br />
const nodestripe =  require('stripe_it') <br />
const stripe_it = new nodestripe({key:'sk_test_34erxxxxxxxxxxxxxxxx'}) </br >
 var token = await stripe_it._.createToken({ <br />
    card: { <br />
         "number": '4242424242424242', <br />
         "exp_month": 12, <br />
         "exp_year": 2019, <br />
         "cvc": '123' <br />
         }
 }) <br />

var charge = await stripe_it._.createCharge({ <br />
                  amount: 2000, <br />
                  currency: "usd",  <br />
                  source: token.id, // obtained from above step  <br />
                  description: "Charge for ilankumaran786@gmail.com" <br />
            }) <br />
} <br />
```

The above sample code is the basic implementation. Can be explained as follows <br />

```
const nodestripe =  require('stripe_it')
const stripe_it = new nodestripe({key:'sk_test_34erxxxxxxxxxxxxxxxx'})
```
Above lines deal with just requiring our node package and creating new instance..Kindly stick with the above syntax..It is mandatory to pass the key while creating the constructor.

<br />
Once the new instance is created., In our case, `stripe_it` variable is the one..Any stripe method can be called with the _ object.
<br />

We Used `stripe_it._.createToken()` to create token for the transaction, Here createToken is the function which takes your payload and speak with stripe to yield token. 

<br />
Similarly, For Creating charges, There is a dedicated function which also can be called with _ object. All the available stripe methods in this module can only be called with the _ object

<br />
List of available methods <br />

`createCharge - Used to create charges..`
`createToken -  Token Creation` 
`chargeList - To view the list of charges made`
`createCustomer - To create a customer`
`customersList - To view list of customers`
