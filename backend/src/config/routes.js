const express = require('express');

module.exports = function(server){

  // Basic URL
  const router = express.Router();
  server.use('/api', router);

  // BillingCycle routes
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  
  BillingCycle.register(router, '/billingCycles');
}