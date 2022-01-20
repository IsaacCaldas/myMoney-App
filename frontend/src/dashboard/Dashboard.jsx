import React, { Component } from "react";
import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import ValueBox from "../common/widget/ValueBox";
import Row from "../common/Layout/Row";

class Dashboard extends Component {

  render(){
    return (
      <div>
        <ContentHeader 
          title='Dashboard'
          small='Version 1.0'
        />
        <Content>

          <Row>
            <ValueBox cols='12 4' color='green' icon='bank'
              value='R$ 10.00' text='Credits Total'></ValueBox>

            <ValueBox cols='12 4' color='red' icon='credit-card'
              value='R$ 10.00' text='Debts Total'></ValueBox>

            <ValueBox cols='12 4' color='blue' icon='money'
              value='R$ 0.00' text='Consolidated Value'></ValueBox>
          </Row>
          
        </Content>
      </div>
  
    );
  }
}

export default Dashboard;