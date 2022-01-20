import React from "react";
import MenuItem from "./MenuItem";
import MenuTree from './MenuTree';

export default props => {

  return (

    <ul className="sidebar-menu">

      <MenuItem path='#/' icon="dashboard" label="dashboard"/>

      <MenuTree label='Cadastro' icon='edit'>
        <MenuItem 
          path='#billingCycles'
          label='Billing Cycles'
          icon='usd'
        ></MenuItem>
      </MenuTree>

    </ul>

  );

}