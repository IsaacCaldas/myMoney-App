import React from "react";
import { HashRouter } from 'react-router-dom'

import Header from '../common/template/Header'
import Sidebar from '../common/template/SideBar'
import Footer from '../common/template/Footer'
import Messages from '../common/msg/Messages'

import Routes from './routes';

export default props => {

  return (

    <HashRouter>
      <div className="wrapper">
          <Header />
          <Sidebar />
          <Routes />
          <Footer />
          <Messages />
      </div>
    </HashRouter>

  );

}