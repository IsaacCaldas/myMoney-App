const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);

// the below code is to validation when method is 'put' 
BillingCycle.updateOptions({
  new: true,
  runValidators: true
});

module.exports = BillingCycle;