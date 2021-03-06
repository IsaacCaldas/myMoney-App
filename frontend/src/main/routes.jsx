import React from "react";
import { Switch, Route, Redirect } from 'react-router';

import Dashboard from "../dashboard/DashboardWithoutRedux";
import BillingCycle from "../billingCycle/BillingCycle";

export default props => {

  return (

    <div className="content-wrapper">
      <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/billingCycles' component={BillingCycle} />
          <Redirect from='*' to='/'/>
      </Switch>
    </div>

  );

}