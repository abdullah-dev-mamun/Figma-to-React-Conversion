import React from "react";
import SideNav from "../components/SideNav";
import TopHeader from "../components/TopHeader";
import MainContent from "../components/MainContent";
import OrderList from "../components/Home/OrderList";
import MenuLayout from "../components/MenuLayout";
import Layout from "./Layout";

function HomePage(props) {
  return (
    <Layout>
      <MainContent />
    </Layout>
  );
}

export default HomePage;
