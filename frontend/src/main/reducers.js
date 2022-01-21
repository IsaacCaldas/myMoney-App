import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/DashboardReducer';
import tabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer
});

export default rootReducer;