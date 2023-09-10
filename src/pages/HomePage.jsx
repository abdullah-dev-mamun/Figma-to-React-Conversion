import React from "react";
import SideNav from "../components/SideNav";
import TopHeader from "../components/TopHeader";
import MainContent from "../components/MainContent";
import OrderList from "../components/Home/OrderList";

function HomePage(props) {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* ====== Top Header ======= */}
      <TopHeader />
      {/* ====== Main body ======= */}
      <section className="flex">
        <SideNav />
        <MainContent />
      </section>
    </div>
  );
}

export default HomePage;
