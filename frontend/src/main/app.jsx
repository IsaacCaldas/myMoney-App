import '../common/dependencies';
import React from "react";
import Routes from './routes';

import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar';
import Footer from '../common/template/Footer';

import Messages from '../common/msg/Messages';

export default props => {

  return (

    <div className='wrapper'>
      <Header/>
      <SideBar/>
      <div className="content-wrapper">
        <Routes/>
      </div>
      <Footer/>
      <Messages/>
    </div>

  );

}