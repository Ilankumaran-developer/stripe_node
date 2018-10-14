## Installation

npm i stripe_it

## Getting Started

const nodestripe =  require('stripe_it') <br />
 const stripe_it = new nodestripe({key:'sk_test_34erxxxxxxxxxxxxxxxx'}) </br >
 var token = await stripe_it._.createToken({ <br />
 card: { <br />
   "number": '4242424242424242', <br />
    "exp_month": 12, <br />
    "exp_year": 2019, <br />
    "cvc": '123' <br />
}}) 

