import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/DashboardReducer';
import tabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/BillingCycleReducer';
import AuthReducer from "../auth/authReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer 
});

export default rootReducer;