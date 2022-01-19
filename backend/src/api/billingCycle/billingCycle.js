const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Report a debt name']
  },
  value: {
    type: Number,
    min: 0,
    required: [true, 'Report a credit value']
  }
});

const debtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Report a debt name']
  },
  value: {
    type: Number,
    min: 0,
    required: [true, 'Report a debt value']
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ['PAID', 'PENDING', 'SCHEDULED']
  }
});

const billingCycleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Report a Billing Cycle name']
  },
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: [true, 'Report a Billing Cycle month']
  },
  year: {
    type: Number,
    min: 1970,
    max: 2100,
    required: [true, 'Report a Billing Cycle year']
  },
  credits: [creditSchema],
  debts: [debtSchema]
});

module.exports = restful.model('BillingCycle', billingCycleSchema);
