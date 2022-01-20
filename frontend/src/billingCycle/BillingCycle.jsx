import React, { Component } from "react";

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';

import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';

class BillingCycle extends Component {

  render(){
    return (

      <div>
        <ContentHeader title='Billing Cycles' small='Register' />
        <Content>
          <Tabs>

            <TabsHeader>

            </TabsHeader>
            <TabsContent>

            </TabsContent>
            
          </Tabs>
        </Content>
      </div>
  
    );
  }
}

export default BillingCycle;