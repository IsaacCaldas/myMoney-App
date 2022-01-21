import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';

import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabHeader from "../common/tab/TabHeader";
import TabContent from "../common/tab/TabContent";

import { init, create, update, remove } from "./BillingCycleActions";

import List from './BillingCycleList';
import Form from './BillingCycleForm';

class BillingCycle extends Component {

  componentWillMount(){
    this.props.init();
  }

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
              <TabContent id='tabList'>
                <List/>
              </TabContent>
              <TabContent id='tabCreate'>
                <Form onSubmit={this.props.create} 
                btnName='Register' btnColor='primary' />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form onSubmit={this.props.update} 
                btnName='Change' btnColor='warning'/> 
              </TabContent>
              <TabContent id='tabDelete'>
              <Form onSubmit={this.props.remove} 
              btnName='Delete' btnColor='danger' readOnly={true}/> 
              </TabContent>
            </TabsContent>
            
          </Tabs>
        </Content>
      </div>
  
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  init, create, update, remove
}, dispatch);


export default connect(
  null, 
  mapDispatchToProps)(BillingCycle);