import React, { Component } from "react";
import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";

class Dashboard extends Component {

  render(){
    return (
      <div>
        <ContentHeader 
          title='Dashboard'
          small='Version 1.0'
        />
        <Content>
          Dashboard content
        </Content>
      </div>
  
    );
  }
}

export default Dashboard;