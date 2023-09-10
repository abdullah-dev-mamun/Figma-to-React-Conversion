import React from "react";
import SideNav from "../components/SideNav";
import TopHeader from "../components/TopHeader";
import MainContent from "../components/MainContent";
import OrderList from "../components/Home/OrderList";
import MenuLayout from "../components/MenuLayout";

function HomePage(props) {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* ====== Top Header ======= */}
      <TopHeader />
      {/* ====== Main body ======= */}
      <section className="flex">
        <SideNav />
        <div className="w-[85%] md:w-[70%] lg:w-[80%] px-3 text-white h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto">
          <MainContent />
          <MenuLayout />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
