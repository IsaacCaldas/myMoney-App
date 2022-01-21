import React, { Component } from "react";

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';

import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabHeader from "../common/tab/TabHeader";
import TabContent from "../common/tab/TabContent";

class BillingCycle extends Component {

  render(){
    return (

      <div>
        <ContentHeader title='Billing Cycles' small='Register' />
        <Content>
          <Tabs>

            <TabsHeader>
              <TabHeader label='List' icon='bars' target='tabList'/>
              <TabHeader label='Include' icon='plus' target='tabCreate'/>
              <TabHeader label='Change' icon='pencil' target='tabUpdate'/>
              <TabHeader label='Remove' icon='trash-o' target='tabDelete'/>
            </TabsHeader>

            <TabsContent>
              <TabContent id='tabList'><h2>List</h2></TabContent>
              <TabContent id='tabCreate'><h2>Include</h2></TabContent>
              <TabContent id='tabUpdate'><h2>Change</h2></TabContent>
              <TabContent id='tabDelete'><h2>Remove</h2></TabContent>
            </TabsContent>
            
          </Tabs>
        </Content>
      </div>
  
    );
  }
}

export default BillingCycle;