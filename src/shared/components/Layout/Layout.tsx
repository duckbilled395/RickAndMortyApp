import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import RouteComponents from "../../../pages";

import './layout.scss'

const Layout: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
        <div className='wrapper__content'>
          <SideBar />
          <RouteComponents />
        </div>
    </div>
  );
};

export default Layout;