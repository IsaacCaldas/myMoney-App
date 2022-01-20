import '../common/template/dependencies';
import React from "react";

import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar';
import Footer from '../common/template/Footer';

export default props => {

  return (

    <div className='wrapper'>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <h1>Main side content</h1>
      </div>
      <Footer />
    </div>

  );

}