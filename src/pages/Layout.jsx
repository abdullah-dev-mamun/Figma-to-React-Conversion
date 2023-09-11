import React, { Children } from "react";
import TopHeader from "../components/TopHeader";
import SideNav from "../components/SideNav";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* ====== Top Header ======= */}
      <TopHeader />
      {/* ====== Main body ======= */}
      <section className="flex">
        <SideNav />
        <div className="w-[85%] md:w-[70%] lg:w-[80%] px-3 text-white h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto">
          {children}
          {/* <MainContent />
          <MenuLayout /> */}
        </div>
      </section>
    </div>
  );
};

export default Layout;
