import { combineReducers } from 'redux';

import DashboardReducer from '../dashboard/DashboardReducer';
import tabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/BillingCycleReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer,
  billingCycle: BillingCycleReducer
});

export default rootReducer;