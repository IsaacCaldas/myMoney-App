const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);

// the below code is to validation when method is 'put' 
BillingCycle.updateOptions({
  new: true,
  runValidators: true
});

BillingCycle.route('get', (req, res, next) => {

  BillingCycle.find({}, (err, docs) => {
    if(!err) {
      res.json(docs);

    } else {
      res.status(500).json({errors: [error]});
    }
  });
});

BillingCycle.route('count', (req, res) => {

  BillingCycle.count((error, value) => {
    
    if(error) {
      res.status(500).json({
        errors: [error]
      });

    } else {
      res.json({value});
    }
  });
});

module.exports = BillingCycle;